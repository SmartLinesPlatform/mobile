export default interface Cliente {
  id: string
  is_in_line: boolean
  created_at: string
  favorites_categories: any[]
  name: string
  coordinates: Coordinates
  profile_picture: any
  password: string
  phone: string
  updated_at: string
  email: string
}

export interface Coordinates {
  lng: number
  lat: number
}
