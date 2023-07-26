import RootLayout from "@/components/layouts/RootLayout";

export default function NewsHomePage(){
  return (
    <div>
      <h1>News</h1>
    </div>
  );
}

NewsHomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
}