export function MyReport(): MyElement {
  return <MyPage />;
}

function MyPage(): MyElement {
  return new MyElement();
}

function myJsxFactory(): MyElement {
  return new MyElement();
}

class MyElement {}
