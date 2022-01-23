import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import nock from 'nock';
import App, { API } from './App';

const movies = {
  "count": 1,
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [

      ],
      "planets": [

      ],
      "starships": [

      ],
      "vehicles": [

      ],
      "species": [

      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2014-12-20T19:49:45.256000Z",
      "url": "https://swapi.dev/api/films/1/"
    }
  ]

};

describe('App Test', () => {
  xtest('should have a button', () => {
    render(<App />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  test('should show list with movies when button is clicked', async () => {

    render(<App />);

    const element = screen.getByRole('button');

    const scope = nock('https://swapi.dev/api')
      .get('/films')
      .reply(200, movies,
        {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        });
    expect(element).toBeInTheDocument();
 
    fireEvent.click(element);
    await screen.findByText('A New Hope')
    const movie = screen.getByTestId('movies');
    console.log(movie.innerHTML);
    expect(movie).toBeInTheDocument();

  });

});

