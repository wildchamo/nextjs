"use client";

import useUserStore from '../stores/userStore'

export default function Home() {
  const userName= useUserStore(state => state.name);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {userName}
      </main>
    )
  }
  