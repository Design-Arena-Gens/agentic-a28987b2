'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function ReportsPage() {
  const [patientId, setPatientId] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      if (patientId && accessCode) {
        setShowDemo(true);
      }
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {!showDemo ? (
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Access Your Reports</h1>
                  <p className="text-gray-600">Enter your credentials to view your clinical test results</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient ID
                    </label>
                    <input
                      type="text"
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your patient ID"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Access Code
                    </label>
                    <input
                      type="password"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your access code"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Access code was provided when you submitted your sample
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Verifying...' : 'Access Reports'}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Need help? <a href="#contact" className="text-primary hover:underline">Contact us</a> or call +1 (555) 123-4567
                  </p>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Demo Access:</strong> Enter any values to see a sample report portal
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800">Patient Dashboard</h1>
                    <p className="text-gray-600">Patient ID: {patientId}</p>
                  </div>
                  <button
                    onClick={() => setShowDemo(false)}
                    className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition"
                  >
                    Logout
                  </button>
                </div>

                {/* Patient Info */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-lg">
                    <div className="text-sm opacity-90 mb-1">Total Reports</div>
                    <div className="text-3xl font-bold">12</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
                    <div className="text-sm opacity-90 mb-1">Latest Report</div>
                    <div className="text-3xl font-bold">Today</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                    <div className="text-sm opacity-90 mb-1">Pending Tests</div>
                    <div className="text-3xl font-bold">2</div>
                  </div>
                </div>

                {/* Reports List */}
                <h2 className="text-2xl font-bold mb-4">Your Test Reports</h2>
                <div className="space-y-4">
                  {/* Report 1 */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-800">Complete Blood Count (CBC)</h3>
                        <p className="text-gray-600 text-sm">Test Date: December 29, 2025</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Ready
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition">
                          View Report
                        </button>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Report 2 */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-800">Lipid Profile</h3>
                        <p className="text-gray-600 text-sm">Test Date: December 28, 2025</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Ready
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition">
                          View Report
                        </button>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Report 3 - Pending */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-800">Thyroid Function Test</h3>
                        <p className="text-gray-600 text-sm">Test Date: December 29, 2025</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                          Processing
                        </span>
                      </div>
                      <div className="text-gray-500 text-sm">
                        Results expected within 24 hours
                      </div>
                    </div>
                  </div>

                  {/* Report 4 */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-800">Liver Function Test</h3>
                        <p className="text-gray-600 text-sm">Test Date: December 25, 2025</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Ready
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition">
                          View Report
                        </button>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Help Section */}
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Need Help Understanding Your Reports?</h3>
                  <p className="text-gray-700 mb-4">
                    Our medical team is here to help explain your test results and answer any questions.
                  </p>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition">
                    Contact Medical Team
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
