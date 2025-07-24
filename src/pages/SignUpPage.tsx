import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => setShowPassword((v) => !v);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((v) => !v);

  const handleSignUp = () => {
    // Handle sign up logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Sign up attempt:', { email, password, confirmPassword });
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-auto" style={{ backgroundColor: '#0A0F2C' }}>
      <div className='h-16'></div> {/* Space for the top bar */}
      <div className="absolute top-6 left-8 text-white text-2xl font-bold z-10 select-none">
        Aris
      </div>

      {/* Centered signup card */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-4 sm:mx-auto my-8">
          <div
            className="rounded-2xl shadow-2xl p-6 sm:p-8"
            style={{ backgroundColor: '#F4F4F4' }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2" style={{ color: '#2E2E2E' }}>
                Create your account
              </h1>
            </div>

            {/* Sign Up Form */}
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#2E2E2E' }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00D1B2] focus:border-[#00D1B2] outline-none transition-colors"
                  style={{
                    borderColor: '#2E2E2E',
                    backgroundColor: '#fff',
                    color: '#2E2E2E'
                  }}
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#2E2E2E' }}>
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-[#00D1B2] focus:border-[#00D1B2] outline-none transition-colors"
                    style={{
                      borderColor: '#2E2E2E',
                      backgroundColor: '#fff',
                      color: '#2E2E2E'
                    }}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{ color: '#2E2E2E' }}>
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-[#00D1B2] focus:border-[#00D1B2] outline-none transition-colors"
                    style={{
                      borderColor: '#2E2E2E',
                      backgroundColor: '#fff',
                      color: '#2E2E2E'
                    }}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Sign Up Button */}
              <button
                type="button"
                onClick={handleSignUp}
                className="w-full py-3 px-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#FFD700',
                  color: '#2E2E2E'
                }}
              >
                Sign Up
              </button>

              {/* Login Link */}
              <div className="text-center text-sm" style={{ color: '#2E2E2E' }}>
                Already have an account?{' '}
               <Link to="/" className="font-medium hover:underline transition-colors" style={{ color: '#00D1B2' }}>
                 login
               </Link>

              </div>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t" style={{ borderColor: '#2E2E2E' }}></div>
              <span className="px-4 text-sm" style={{ color: '#2E2E2E' }}>OR</span>
              <div className="flex-1 border-t" style={{ borderColor: '#2E2E2E' }}></div>
            </div>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full py-3 px-4 border rounded-lg flex items-center justify-center gap-3 bg-white transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: '#2E2E2E',
                backgroundColor: '#fff',
                color: '#2E2E2E'
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Sign up with Google</span>
            </button>

            {/* Footer Links */}
            <div className="mt-8 text-center text-xs" style={{ color: '#2E2E2E' }}>
              <a href="#" className="hover:underline transition-colors font-medium" style={{ color: '#00D1B2' }}>
                Terms of Service
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:underline transition-colors font-medium" style={{ color: '#00D1B2' }}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}