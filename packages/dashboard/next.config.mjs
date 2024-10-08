
import getEnv from "../../loadEnv.js";

const sharedEnv = getEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // TODO: We don't need this, just shared encrypt utils.
    env: {
      NEXT_PUBLIC_ORACLE_PUBLIC_KEY_FROM_ROOT_ENV: sharedEnv.ORACLE_PUBLIC_KEY,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ipfs.io',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
