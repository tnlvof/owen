export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-6">
      <h1 className="text-4xl font-bold">소개</h1>
      <div className="w-full max-w-[600px] space-y-4">
        <p className="text-lg text-muted-foreground">
          안녕하세요. 저는 웹 개발자입니다.
        </p>
      </div>
    </div>
  );
}
