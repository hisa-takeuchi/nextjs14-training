type Props = {
  searchParams: {[key:string]:string | string[] | undefined }
}

export default function Page(props: Props) {
  if (typeof props.searchParams.foo === 'string') {

  }
  return (
    <div>
      <h1>利用規約</h1>
    </div>
  );
}
