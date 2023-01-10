// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Quote {
  quote: string,
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote>
) {
  try {
    res.status(200).json({ quote: 'Get Quote' })
  } catch (err) {
    res.status(500).json({ quote: 'NA', error: 'Failed to load Data' })
  }
}
