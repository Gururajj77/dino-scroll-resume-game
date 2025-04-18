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
				border: '#222222',
				input: '#222222',
				ring: '#000000',
				background: '#FFFFFF',
				foreground: '#000000',
				primary: {
					DEFAULT: '#000000',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#222222',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#000000',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F1F1F1',
					foreground: '#8A898C'
				},
				accent: {
					DEFAULT: '#F1F1F1',
					foreground: '#000000'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#000000'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#000000'
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
				'dino-run': {
					'0%': {
						backgroundPosition: '0px 0px'
					},
					'100%': {
						backgroundPosition: '-176px 0px'
					}
				},
				'dino-jump': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-100px)'
					},
					'100%': {
						transform: 'translateY(0px)'
					}
				},
				'obstacle-move': {
					'0%': {
						transform: 'translateX(100vw)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				'leg-move': {
					'0%': {
						height: '16px'
					},
					'100%': {
						height: '12px'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'dino-run': 'dino-run 0.5s steps(2) infinite',
				'dino-jump': 'dino-jump 0.5s ease-in-out',
				'obstacle-move': 'obstacle-move 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
