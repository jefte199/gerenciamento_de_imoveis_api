import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.number().default(3333),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('Error: variables', _env.error.format());
  throw new Error('Invalid variable');
}

export const env = _env.data;
