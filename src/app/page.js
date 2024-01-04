'use client';
import ResumeGenerator from './ResumeGenerator/page';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-800">
     
      <ResumeGenerator />
    </main>
  )
}
