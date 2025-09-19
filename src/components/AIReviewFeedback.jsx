import { div } from "framer-motion/client";
import React, { useState } from "react";

// Dummy AI Response Generator
const generateAIReview = (feedback, rating) => {
  if (rating >= 4) {
    return `🌟 Thanks for the ${rating}-star rating! We're glad you enjoyed your experience. "${feedback}"`;
  } else if (rating === 3) {
    return `👌 Appreciate the ${rating}-star feedback! We'll improve based on "${feedback}".`;
  } else {
    return `😟 Sorry about your ${rating}-star experience. Your review "${feedback}" will help us do better.`;
  }
};

const AIReviewFeedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback || rating === 0)
      return alert("Please provide both feedback & a star rating!");

    const aiReply = generateAIReview(feedback, rating);
    setReviews([{ rating, feedback, aiReply }, ...reviews]);
    setFeedback("");
    setRating(0);
  };

  return (
   <div className="bg-gradient-to-b from-gray-200 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-2xl mt-10 
                      shadow-[0_10px_30px_rgba(0,0,0,0.2)]">  {/* ✅ Heavy custom shadow */}
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          🌿 Share Your Experience
        </h2>

        {/* Feedback Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-xl p-6 border border-gray-100 shadow-md"
        >
          {/* Star Rating */}
          <div className="flex items-center space-x-3 justify-center">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <svg
                  key={starValue}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={
                    starValue <= (hover || rating)
                      ? "url(#goldGradient)"
                      : "lightgray"
                  }
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-10 h-10 cursor-pointer transform transition-transform hover:scale-125 drop-shadow-md"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFA500" />
                    </linearGradient>
                  </defs>
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.93 5.778 1.401 8.172L12 18.896l-7.339 3.865 1.4-8.172-5.93-5.778 8.2-1.193z" />
                </svg>
              );
            })}
            <span className="ml-3 text-lg font-semibold text-gray-700">
              {rating > 0 ? `${rating} / 5` : "Choose rating"}
            </span>
          </div>

          {/* Feedback */}
          <textarea
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 shadow-sm"
            placeholder="✨ Write your review..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-xl 
                      shadow-lg hover:from-emerald-600 hover:to-green-500 transform hover:scale-[1.02] transition"
          >
            🚀 Submit Review
          </button>
        </form>

        {/* Reviews Section */}
        <div className="mt-10 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">
            Visitor Reviews 💬
          </h3>

          {reviews.length === 0 && (
            <p className="text-gray-500 text-center italic mt-6">
              No reviews yet… Be the first to share your voice!
            </p>
          )}

          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-white border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < review.rating ? "url(#goldGradient)" : "lightgray"}
                    className="w-6 h-6 drop-shadow-sm"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.93 5.778 1.401 8.172L12 18.896l-7.339 3.865 1.4-8.172-5.93-5.778 8.2-1.193z" />
                  </svg>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-800 font-medium">📝 "{review.feedback}"</p>

              {/* AI Reply */}
              <div className="mt-3 bg-green-50 border-l-4 border-green-400 p-3 rounded-md text-sm text-gray-700 italic shadow-inner">
                🤖 {review.aiReply}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIReviewFeedback;