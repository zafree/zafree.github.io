import type { MDXComponents } from 'mdx/types'
import s from './mdx-components.module.sass'
import Separator from '@/components/separator/Separator'
import Button from '@/components/button/Button'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h3 className={s.title}>{children}</h3>,
    h2: ({ children }) => <h4 className={s.subtitle}>{children}</h4>,
    a: ({ href, children }) => <Button to={href}>{children}</Button>,
    p: ({ children }) => <p className={s.copy}>{children}</p>,
    ul: ({ children }) => <ul className={s.copy}>{children}</ul>,
    ol: ({ children }) => <ol className={s.copy}>{children}</ol>,
    pre: ({ children }) => <pre className={s.pre}>{children}</pre>,
    hr: () => <Separator />,
    ...components,
  }
}
