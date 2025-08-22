import './pagewrapper.scss'

type Props = { name: string; descr: string; children?: React.ReactNode };

const PageWrapper = ({ name, descr, children }: Props) => {
  return (
    <div className='page'>
      <h1 className='page__name'>{name}</h1>
      <p className='page__descr'>{descr}</p>
      {children}
    </div>
  );
};

export default PageWrapper;