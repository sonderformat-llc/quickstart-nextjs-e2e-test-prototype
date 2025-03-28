import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from 'next/navigation';

export default async function Account() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }
  return (
    <section>
      <div style={{ flex: '1' }}>
        <div className="column-container">
          <div className="app-container">
            <h3>Your balance</h3>
            <div className="balance">$0.00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
