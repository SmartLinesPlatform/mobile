export default interface Loja {
  id: string
  name: string
  cnpj: string
  type: string
  lines: Lines
  picture_url: string
  categories: string[]
  created_at: string
  area_id: string
  attendants: any[]
  updated_at: string
  ads: string[]
  admins: any[]
  coordinates: Coordinates
}

export interface Lines {
  attendance_line_id: string
  withdraw_line_id: string
}

export interface Coordinates {
  lng: number
  lat: number
}
