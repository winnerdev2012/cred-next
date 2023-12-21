'use client';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AppContext } from '../wallet-adapter/AppContext';
import '../styles/App.css';

const Sidebar = dynamic(() => import('../components/header/sidebar'), { ssr: false });
const WalletModal = dynamic(() => import('../components/header/walletModal'), { ssr: false });
const ActivityModal = dynamic(() => import('./credPoints/defiActivity/activityModal'), { ssr: false });
const NftModal = dynamic(() => import('./credPoints/nftBoard/nftModal'), { ssr: false });
const ReferralModal = dynamic(() => import('./credPoints/referral/referralModal'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AppContext>
            {children}
            <Sidebar />
            <WalletModal />
            <ActivityModal />
            <NftModal />
            <ReferralModal />
          </AppContext>
        </Provider>
      </body>
    </html >
  );
}