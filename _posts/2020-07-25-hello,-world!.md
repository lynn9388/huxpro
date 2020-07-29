---
title:    Hello, world!
subtitle: Test example
tags: [Jekyll, Markdown]
---

The post in website based on Jekyll is typically written with Markdown, which is just a lightweight markup language with plain text formatting syntax. This makes it very easy to create and publish posts.

## Create a Post

To create a post, add a file to your `_posts` directory with the following format:

```bash
YEAR-MONTH-DAY-name-of-post.md
```

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers. For example, the following are examples of valid post filenames:

```bash
2020-07-30-test-example.md
```

All blog post files must begin with [front matter](https://jekyllrb.com/docs/front-matter/) which is typically used to set a [layout](https://jekyllrb.com/docs/layouts/) or other metadata. The post you are reading now is like this:

```markdown
---
title:    Hello, world!
subtitle: Test example
tags: [Jekyll, Markdown]
---
```

## Add More Content

After you create the post file, it's time to add some content. Below is a simple list of Markdown syntax and extensions.

### Block Elements

#### Headers

```markdown
# H1

## H2

### H3

#### H4

##### H5
```

You may not use `# H1` in your post, because the `title` variable in front matter is considered as `H1` and showed on the top of the page.

#### Lists

- Unordered

    ```markdown
    - Red
    - Green
    - Blue
    ```

    - Red
    - Green
    - Blue

- Ordered

    ```markdown
    1. Red
    1. Green
    1. Blue
    ```

    1. Red
    1. Green
    1. Blue

- Task

    ```markdown
    - [x] Task 1
    - [ ] Task 2
    - [ ] Task 3
    ```

    - [x] Task 1
    - [ ] Task 2
    - [ ] Task 3

#### Code Blocks

There are many different ways to style code blocks, you can indent with four spaces:

<pre><code>    if (2 > 1) {
        return true
    }
</code></pre>

    if (2 > 1) {
        return true
    }

GitHub also supports something called code fencing, which allows for multiple lines without indentation, and if you'd like to use syntax highlighting, include the languages:

<pre><code>```java
if (2 > 1) {
    return true
}
```
</code></pre>

```java
if (2 > 1) {
    return true
}
```

We use [Linguist](http://https://github.com/github/linguist) to perform language detection and syntax highlighting. You can find out which keywords are valid in the [languages YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

#### Blockquotes

```markdown
> Blockquotes uses `>` characters for blockquoting. And blockquotes can be nested by adding additional levels of `>`:
>
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Blockquotes can also contain other Markdown elements:
>
> 1. This is the first list item.
> 1. This is the second list item.
>
> Here's some example code:
>
> ```java
>  if (2 > 1) {
>      return true
>  }
> ```
```

> Blockquotes uses `>` characters for blockquoting. And blockquotes can be nested by adding additional levels of `>`:
>
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Blockquotes can also contain other Markdown elements:
>
> 1. This is the first list item.
> 1. This is the second list item.
>
> Here's some example code:
>
> ```java
>  if (2 > 1) {
>      return true
>  }
> ```

### Span Elements

#### Links

- Hyperlinks

    ```markdown
    [Lynn's Blog](https://lynn9388.github.io)
    ```

    [Lynn's Blog](https://lynn9388.github.io)

- Anchor Links

    An anchor link is a link on a page that brings you to a specific place on that page.

    ```markdown
    [Span Elements](#span-elements)
    ```

    [Span Elements](#span-elements)

    Note that the link must be a lowercase header, even if the original header contains uppercase letters. If the header contains multiple words, they must be connected by `-`. If your header contains complex symbols, you should pre-generate the HTML page from Markdown and see what the `id` attribute of that header with your browser's [web developer tools](https://en.wikipedia.org/wiki/Web_development_tools).

#### Text Formatting

```markdown
*Italic*

**Bold**

~~Strikethrough~~
```

*Italic*

**Bold**

~~Strikethrough~~

#### Inline Code

```markdown
Inline `code` has `backticks` around it.
```

Inline `code` has `backticks` around it.

### Extras

#### Tables

> You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```markdown
| HEADER1 | HEADER2 | HEADER3 | HEADER4 |
| ------- | :------ | :-----: | ------: |
| content | content | content | content |
```

| HEADER1 | HEADER2 | HEADER3 | HEADER4 |
| ------- | :------ | :-----: | ------: |
| content | content | content | content |

You can choose a different alignment style for each column:

- `:-----` Align left
- `:----:` Align center
- `-----:` Align right

You may want to use a [table generator](https://www.tablesgenerator.com/markdown_tables) for complicated tables.

#### MathJax

The theme supports [MathJax](https://www.mathjax.org), which means you can embed mathematics with $$\rm\LaTeX$$.

```markdown
$$E = mc^2$$
```

$$E = mc^2$$

## References

- [Posts](https://jekyllrb.com/docs/posts/#including-images-and-resources)
- [Daring Fireball](https://daringfireball.net/projects/markdown/syntax)
- [GitHub](https://guides.github.com/features/mastering-markdown/)
- [GitHub Markdown Cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
