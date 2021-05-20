import client from './client';
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export async function getQuestions() {
  const results = await client.fetch(
      `*[ _type == "questions"]{
        _id,
        question,
      }`,
  );
  return results;
}

export async function getQuestion(slug) {
  const results = await client.fetch(
      `*[ _type == "questions" && slug.current == $slug]{
        _id,
        question,
      }`,
      {slug},
  );
  return results[0];
}
