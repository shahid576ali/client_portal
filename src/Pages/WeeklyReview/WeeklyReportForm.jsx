import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import RichTextEditor from './RichTextEditor';
import { FiSend } from "react-icons/fi";
import { ReviewContext } from './WeeklyReviewList';

function WeeklyReportForm() {
  const navigate = useNavigate();
  const { addReview } = useContext(ReviewContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    weekRange: format(new Date(), 'yyyy-MM-dd'),
    feelingScore: 90,
    tasksDone: '',
    impacts: '',
    difficulties: '',
    learnings: '',
    weekFeeling: '',
    suggestions: '',
    acknowledgement: ''
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.tasksDone.trim()) newErrors.tasksDone = 'Please describe your completed tasks';
    if (!formData.impacts.trim()) newErrors.impacts = 'Please share your key impacts';
    if (!formData.learnings.trim()) newErrors.learnings = 'Please share your learnings';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const newId = String(100000 + Math.floor(Math.random() * 900000));
      const reviewData = {
        id: newId,
        week: `${formData.weekRange} to ${format(new Date(formData.weekRange), 'yyyy-MM-dd')}`,
        status: 'PENDING',
        remarks: formData.tasksDone,
        stamp: format(new Date(), "yyyy-MM-dd HH:mm:ss")
      };

      // Add the review to the context
      addReview(reviewData);

      navigate('/success', { 
        state: { 
          data: formData,
          reviewData: reviewData
        } 
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const formFields = [
    { id: 'tasksDone', label: '✨ Tasks Completed This Week', required: true },
    { id: 'impacts', label: '🎯 Key Impacts & Achievements', required: true },
    { id: 'difficulties', label: '🤔 Challenges Encountered' },
    { id: 'learnings', label: '📚 Key Learnings & Growth', required: true },
    { id: 'weekFeeling', label: '💭 Weekly Reflections' },
    { id: 'suggestions', label: '💡 Ideas & Suggestions' },
    { id: 'acknowledgement', label: '🙏 Acknowledgements' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto form-container">
        <div className="card rounded-2xl p-8 sm:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#6096BA]">
          Weekly Report
        </h1>


          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-field">
                <label className="block text-sm font-medium mb-2 field-label">
                  📅 Week Starting
                </label>
                <input
                  type="date"
                  name="weekRange"
                  value={formData.weekRange}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
                />
              </div>

              <div className="form-field">
                <label className="block text-sm font-medium mb-2 field-label">
                  ⭐ Weekly Satisfaction ({formData.feelingScore}%)
                </label>
                <input
                  type="range"
                  name="feelingScore"
                  min="0"
                  max="100"
                  value={formData.feelingScore}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="input-range"
                />
              </div>
            </div>

            {formFields.map(field => (
              <div key={field.id} className="form-field">
                <label className="block text-sm font-medium mb-2 field-label">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <RichTextEditor
                  id={field.id}
                  value={formData[field.id]}
                  onChange={(content) => handleChange(field.id, content)}
                />
                {errors[field.id] && (
                  <p className="mt-1 text-sm text-red-500">{errors[field.id]}</p>
                )}
              </div>
            ))}

            <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="px-5 py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 bg-[#6096BA] hover:bg-[#4E7A9A] transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Submit Report
            <FiSend className="h-5 w-5" />
          </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WeeklyReportForm;