import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Traditional Catholic Quotes';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5DEB3',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            color: '#8B0000',
            fontSize: 60,
            fontWeight: 700,
            fontFamily: 'Cinzel',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Traditional Catholic Quotes
        </div>
        <div
          style={{
            color: '#2C1810',
            fontSize: 30,
            fontFamily: 'Crimson Text',
            textAlign: 'center',
          }}
        >
          Sacred Wisdom Through the Ages
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 