import type { TWorkDay } from './TimeTrackType'

export type TEmployee = {
    id: string,
    name: string,
    email?: string,
    phone?: string,
    isCheck: boolean,
    department: string,
}
