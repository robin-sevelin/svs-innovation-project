import { atom } from 'jotai';
import { RATE_BASE_VALUE } from '../constants/constants';

export const inputAtom = atom(0);
export const fromAtom = atom(RATE_BASE_VALUE);
export const toAtom = atom(RATE_BASE_VALUE);
export const resultAtom = atom(0);
