
import type { Metadata } from 'next'
import Dashboard from './event-dashboard/page';
 
export const metadata: Metadata = {
  title: 'E-collection',
  description: 'Make a great event and controls',
}
export default function Home() {

  return (
    <div>
      <Dashboard/>
    </div>
  );
}
