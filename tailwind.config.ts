
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				rapunzel: {
					purple: '#8B5CF6',
					lightPurple: '#A78BFA',
					darkPurple: '#7C3AED',
					gold: '#F59E0B',
					pink: '#EC4899'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '0.7' },
					'50%': { opacity: '1' }
				},
				'sparkle': {
					'0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
					'50%': { transform: 'scale(1) rotate(180deg)', opacity: '1' }
				},
				'fadeIn': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slideInLeft': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slideInRight': {
					'0%': { opacity: '0', transform: 'translateX(50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
                                'petal-sway': {
                                        '0%, 100%': { transform: 'rotate(-3deg)' },
                                        '50%': { transform: 'rotate(3deg)' }
                                },
                                'stem-grow': {
                                        '0%': { transform: 'scaleY(0)' },
                                        '100%': { transform: 'scaleY(1)' }
                                },
                                'center-bloom': {
                                        '0%': { transform: 'scale(0)', opacity: '0' },
                                        '100%': { transform: 'scale(1)', opacity: '1' }
                                },
                                'petal-bloom': {
                                        '0%': { transform: 'scale(0)', opacity: '0' },
                                        '100%': { transform: 'scale(1)', opacity: '1' }
                                },
                                'orbit': {
                                        '0%': { transform: 'rotate(0deg)' },
                                        '100%': { transform: 'rotate(360deg)' }
                                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'fadeIn': 'fadeIn 1s ease-out',
				'slideInLeft': 'slideInLeft 1s ease-out',
				'slideInRight': 'slideInRight 1s ease-out',
                                'petal-sway': 'petal-sway 4s ease-in-out infinite',
                                'stem-grow': 'stem-grow 1s ease-out forwards',
                                'center-bloom': 'center-bloom 0.6s ease-out forwards',
                                'petal-bloom': 'petal-bloom 0.8s ease-out forwards',
                                'orbit-slow': 'orbit 10s linear infinite'
                        }
                }
        },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
