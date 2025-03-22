import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.data;
  //const reviewData = location.state?.reviewData;

  useEffect(() => {
    if (!formData) {
      navigate('/');
    }
  }, [formData, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 form-container">
        <div className="card rounded-2xl p-8 text-center">
          <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-green-100 mb-8">
            <svg className="h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Your weekly report has been submitted successfully.
          </p>

          <div className="bg-indigo-50 rounded-lg p-4 mb-8">
            <p className="text-indigo-800">
              Week Starting: {new Date(formData?.weekRange).toLocaleDateString()}
              <br />
              Satisfaction Score: {formData?.feelingScore}%
            </p>
          </div>
          
          <button
            onClick={() => navigate('/')}
            className="submit-button px-8 py-3 rounded-lg text-white font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;