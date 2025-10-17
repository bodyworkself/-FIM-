// app/evidence-cards/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EvidenceCards() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontWeight: 700 }}>OK: /evidence-cards</h1>
      <p>この表示が出ればルーティングとビルドは成功です。</p>
    </main>
  );
}
