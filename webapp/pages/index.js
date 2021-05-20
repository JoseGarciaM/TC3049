import BaseLayout from 'components/layout';
import useSWR from 'swr';
import {useAuth} from 'lib/supabase/auth';
import Auth from 'components/auth';
import {
  getQuestions,
} from 'lib/sanity/queries';

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json', token}),
    credentials: 'same-origin',
  }).then((res) => res.json());

export default function Index({
  sectionQuestions,
}) {
  const {user, session} = useAuth();
  const data = useSWR(
    session ? ['/api/auth/get-user', session.access_token] : null, fetcher,
  );

  return (
    <BaseLayout>
      {!user ? (
        <>
          <div>TC3049 Game</div>
          <div>
            <Auth authView="signup"/>
          </div>
        </>
      ) : user ? (
        <>
          {sectionQuestions && (
            <div>
              {sectionQuestions.map((question) => (
                <div key={question._id}>
                  <div>{question._id}</div>
                  <div>{question.question}</div>
                </div>
              ))}
            </div>
          )}
          <div>
            <h4>You&apos;re signed in</h4>
            <h5>Email: {user.email}</h5>
            <hr />
            {data ? (
              <>
                <div style={{color: 'green'}}>
                  User data retrieved server-side (in API route):
                </div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </>
      ) : null}
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const sectionQuestions = await getQuestions();

  return {
    props: {
      sectionQuestions,
    },
    revalidate: 1,
  };
}
