import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '9fdueray',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token:
    'skn76AAEbn15GcuA3AnECkBI1FMMI1GkOoBHCZQX1UAk8lmdLi18ee3tJnc520x5AMMiu2epiLDG8YJGiEy1ZcdQvfl45VAW6DTPc8PTyktEMp0HTlZF1JUFpdYmnuJ0MFzwt85W5yRZHY2n6q81CgojrELBtKV04g1sdhM3W3k4WiIR4g6M',
})
