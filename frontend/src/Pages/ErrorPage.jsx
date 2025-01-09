import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

const ErrorPage = () => {
  const err = useRouteError();

  let title = 'An error accurred!';
  let message = 'Something went worng';

  if (err.status === 500) {
    message = JSON.parse(err.data).message;
  }

  if (err.status === 404) {
    title = 'Not Found!';
    message = 'Could not find resource or page';
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};
export default ErrorPage;
