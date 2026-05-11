"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { MessageSquare, Github, LogOut } from "lucide-react";

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

  useEffect(() => {
    let ignore = false;

    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) setComments(data);
      })
      .catch(() => {});

    return () => {
      ignore = true;
    };
  }, []);

  const submitComment = async () => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (res.ok) {
        setText("");
        const refreshed = await fetch("/api/comments");
        const data = await refreshed.json();
        setComments(data);
      }
    } catch {
      // silently fail
    }

    setLoading(false);
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-3 mb-4">
              <MessageSquare size={20} className="text-primary" />
              <h2 className="text-2xl font-bold">Recruiter&apos;s Corner</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Leave private feedback or just say hello. Authentication via GitHub.
            </p>
          </div>

          {comments.length > 0 && (
            <div className="space-y-3 mb-10 reveal reveal-delay-1">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="glass rounded-xl p-5 text-left"
                >
                  <p className="text-sm text-foreground leading-relaxed">
                    {comment.text}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-muted">
                      {comment.userName}
                    </span>
                    <span>&middot;</span>
                    <span>
                      {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="glass rounded-2xl p-6 md:p-8 reveal reveal-delay-2">
            {!session ? (
              <div className="text-center">
                <button
                  onClick={() => signIn("github")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                >
                  <Github size={18} />
                  Login with GitHub to Comment
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Leave private feedback for the author..."
                  rows={4}
                  className="w-full rounded-xl bg-white/[0.03] border border-border p-4 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                />
                <div className="flex items-center justify-between">
                  <button
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
                    onClick={submitComment}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Feedback"}
                  </button>
                  <button
                    onClick={() => signOut()}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <LogOut size={14} />
                    Logout
                    {session.user?.name && (
                      <span className="hidden sm:inline">
                        ({session.user.name})
                      </span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
