"use client";

import { useMemo, useState } from "react";

const RULES: { test: (v: string) => boolean; label: string }[] = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  { test: (v) => /[0-9]/.test(v), label: "At least 1 number" },
  { test: (v) => /[A-Z]/.test(v), label: "At least 1 uppercase letter" },
  { test: (v) => /[a-z]/.test(v), label: "At least 1 lowercase letter" },
  { test: (v) => /[^A-Za-z0-9]/.test(v), label: "At least 1 special character" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const emailValid = email.length === 0 || EMAIL_RE.test(email);
  const passedRules = useMemo(
    () => RULES.map((rule) => rule.test(password)),
    [password]
  );
  const passwordValid = passedRules.every(Boolean);
  const canSubmit = email.length > 0 && EMAIL_RE.test(email) && passwordValid && accepted;

  return (
    <div className="flex h-full flex-col justify-center gap-4 rounded-lg bg-paper p-6 text-ink sm:p-7">
      <div>
        <label htmlFor="demo-email" className="mb-2 block text-sm text-ink/70">
          Email address
        </label>
        <input
          id="demo-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border-b border-ink/25 bg-transparent pb-2 text-base outline-none focus:border-ink"
        />
        {email.length > 0 && !emailValid && (
          <p className="mt-2 text-sm text-fail">Please enter a valid email address</p>
        )}
      </div>

      <div>
        <label htmlFor="demo-password" className="mb-2 block text-sm text-ink/70">
          Password
        </label>
        <input
          id="demo-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose a password"
          className="w-full border-b border-ink/25 bg-transparent pb-2 text-base outline-none focus:border-ink"
        />
        <ul className="mt-3 space-y-1.5">
          {RULES.map((rule, i) => (
            <li key={rule.label} className="flex items-center gap-2 text-sm">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  passedRules[i] ? "bg-pass" : "bg-fail/60"
                }`}
              />
              <span className={passedRules[i] ? "text-pass" : "text-ink/55"}>
                {rule.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-pass"
        />
        <span className="text-ink">
          I accept the{" "}
          <a href="#" className="text-signal underline underline-offset-2">
            Terms &amp; Conditions
          </a>
        </span>
      </label>

      <button
        type="button"
        disabled={!canSubmit}
        className={`w-full rounded-md py-3 text-sm font-medium transition-colors ${
          canSubmit
            ? "bg-pass text-white"
            : "cursor-not-allowed bg-ink/10 text-ink/40"
        }`}
      >
        Log in
      </button>
    </div>
  );
}
