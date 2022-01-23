import { rest } from 'msw'

export const handlers = [

    rest.get('https://swapi.dev/api/films/', (req, res, ctx) => {
        return res(
            ctx.json({
                "count": 1,
                "results": [
                    {
                        "title": "A New Hope",
                        "episode_id": 4,
                        "opening_crawl": "It is a period of civil war...",
                        "director": "George Lucas",
                        "producer": "Gary Kurtz, Rick McCallum",
                        "release_date": "1977-05-25",
                        "created": "2014-12-10T14:23:31.880000Z"
                    },
                    {
                        "title": "A Second Hope",
                        "episode_id": 5,
                        "opening_crawl": "It is a period of civil war...",
                        "director": "George Lucas",
                        "producer": "Gary Kurtz, Rick McCallum",
                        "release_date": "1977-05-25",
                        "created": "2014-12-10T14:23:31.880000Z"
                    }
                ]
            
            })
        )
    }),
]