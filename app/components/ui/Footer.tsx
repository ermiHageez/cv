"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  text: string;
  userName: string;
  createdAt: string;
};

export default function Footer() {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch comments from API
  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Submit comment
  const submitComment = async () => {
    if (!text.trim()) return;
    setLoading(true);

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (res.ok) {
      setText("");
      fetchComments(); // Refresh list
    } else {
      const error = await res.json();
      alert(error.error || "Failed to submit comment");
    }

    setLoading(false);
  };

  return (
    <footer className="mt-2 bg-gray-90">
      <div className="flex flex-col justify-center mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Recruiter's Feedback</h2>
        <div className='px-2 border-2 border-blue-500 rounded w-40 self-center mb-3.5'></div>
        {/* Comment List */}
        <div className="space-y-4 mb-8">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg border bg-white p-4 shadow-sm"
            >
              <p className="text-gray-800">{comment.text}</p>
              <div className="mt-2 text-sm text-gray-500">
                {comment.userName} ·{" "}
                {new Date(comment.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Auth + Input */}
        {!session ? (
          <button
            onClick={() => signIn("github")}
            className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2.5 text-white hover:bg-gray-800 transition"
          >
            Login with GitHub
          </button>
        ) : (
          <div className="space-y-3">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Leave private feedback for the author..."
              rows={4}
              className="w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div className="flex items-center justify-between">
              <button
                className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition disabled:opacity-50"
                onClick={submitComment}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              <button
                onClick={() => signOut()}
                className="text-sm text-gray-500 hover:underline"
              >
                Logout {session.user?.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
