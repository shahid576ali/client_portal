import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadWeeklyReview() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    week: '',
    remarks: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-900">Upload Weekly Review</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-indigo-50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="week" className="block text-sm font-semibold text-indigo-900 mb-2">
              Week
            </label>
            <input
              type="week"
              id="week"
              name="week"
              value={formData.week}
              onChange={handleChange}
              className="block w-full rounded-lg border-2 border-indigo-100 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="remarks" className="block text-sm font-semibold text-indigo-900 mb-2">
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              rows={4}
              value={formData.remarks}
              onChange={handleChange}
              className="block w-full rounded-lg border-2 border-indigo-100 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-3 border-2 border-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 font-semibold shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadWeeklyReview;