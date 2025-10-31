import { StaffStatus, SyncStatus } from './common';

export interface StaffSchedule {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // "09:00"
  endTime: string; // "17:00"
  isAvailable: boolean;
}

export interface Staff {
  id: string;
  salonId: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  specialties: string[]; // Service IDs
  status: StaffStatus;
  clockedInAt?: Date;
  currentTicketId?: string;
  schedule: StaffSchedule[];
  turnQueuePosition?: number;
  servicesCountToday: number;
  revenueToday: number;
  tipsToday: number;
  createdAt: Date;
  updatedAt: Date;
  syncStatus: SyncStatus;
}
