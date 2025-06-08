'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function ConfirmPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Get token from URL hash or search params
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const searchParams = new URLSearchParams(window.location.search)
        
        const token = hashParams.get('access_token') || searchParams.get('token')
        const type = hashParams.get('type') || searchParams.get('type')
        
        if (token && type === 'signup') {
          // Set the session using the tokens from the URL
          const accessToken = hashParams.get('access_token')
          const refreshToken = hashParams.get('refresh_token')
          
          if (accessToken && refreshToken) {
            const { error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken
            })
            
            if (error) throw error
            
            setStatus('success')
            setMessage('Your email has been confirmed! Welcome to Free to Hang.')
            
            // Clean up URL
            window.history.replaceState({}, document.title, '/auth/confirm')
            
            // Auto redirect after 3 seconds
            setTimeout(() => {
              router.push('/app') // Redirect to app or dashboard
            }, 3000)
          } else {
            throw new Error('Invalid confirmation link')
          }
        } else {
          // Check if user is already confirmed by trying to get session
          const { data: { session } } = await supabase.auth.getSession()
          if (session) {
            setStatus('success')
            setMessage('Your email is already confirmed!')
            setTimeout(() => {
              router.push('/app')
            }, 2000)
          } else {
            throw new Error('No confirmation token found')
          }
        }
      } catch (error: any) {
        console.error('Confirmation error:', error)
        setStatus('error')
        setMessage(error.message || 'Failed to confirm email. Please try again.')
      }
    }

    confirmEmail()
  }, [router])

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Loader2 className="w-16 h-16 text-primary-600 mx-auto mb-6 animate-spin" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Confirming your email...
            </h1>
            <p className="text-gray-600">
              Please wait while we verify your email address.
            </p>
          </motion.div>
        )
        
      case 'success':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Email confirmed!
            </h1>
            <p className="text-gray-600 mb-8">
              {message}
            </p>
            
            <div className="space-y-4">
              <Link
                href="/app"
                className="block w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Continue to App
              </Link>
              
              <Link
                href="/"
                className="block w-full text-primary-600 hover:text-primary-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        )
        
      case 'error':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Confirmation failed
            </h1>
            <p className="text-gray-600 mb-8">
              {message}
            </p>
            
            <div className="space-y-4">
              <Link
                href="/auth"
                className="block w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Try Signing Up Again
              </Link>
              
              <Link
                href="/"
                className="block w-full text-primary-600 hover:text-primary-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center mb-4">
              <Heart className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Free to Hang</span>
            </div>
          </div>

          {renderContent()}
        </motion.div>
      </div>
    </div>
  )
} 