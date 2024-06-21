export const testDataEditor = {
  children: [
    {
      type: "ArticleText",
      children: [
        {
          children: [
            {
              text: "test_node_1",
            },
          ],
          type: "paragraph",
        },
      ],
    },
    {
      type: "ArticleText",
      children: [
        {
          children: [
            {
              text: "test_node_2",
            },
          ],
          type: "paragraph",
        },
      ],
    },
    {
      type: "Code",
      children: [
        {
          type: "codeItem",
          children: [
            {
              text: "test_node_3",
            },
          ],
        },
        {
          type: "selector",
          children: [
            {
              text: "js",
            },
          ],
          values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
        },
      ],
    },
    {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          children: [
            {
              text: "test_node_4",
            },
          ],
          placeholder: "Type the quote",
        },
        {
          children: [
            {
              text: "",
            },
          ],
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    },
  ],
  operations: [],
  selection: null,
  marks: null,
  history: {
    undos: [
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "Code",
            children: [
              {
                type: "codeItem",
                children: [
                  {
                    text: "",
                  },
                ],
              },
              {
                type: "selector",
                children: [
                  {
                    text: "js",
                  },
                ],
                values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_node",
          path: [2],
          node: {
            type: "ArticleText",
            children: [
              {
                children: [
                  {
                    text: "",
                  },
                ],
                type: "paragraph",
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 0,
          text: "s",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 1,
          text: "d",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 2,
          text: "f",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 3,
          text: "s",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 4,
          text: "d",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 5,
          text: "g",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 6,
          text: "s",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 7,
          text: "e",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 8,
          text: "r",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 9,
          text: "g",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 10,
          text: "s",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 11,
          text: "d",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 12,
          text: "c",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 13,
          text: "v",
        },
      ],
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "Code",
            children: [
              {
                type: "codeItem",
                children: [
                  {
                    text: "",
                  },
                ],
              },
              {
                type: "selector",
                children: [
                  {
                    text: "js",
                  },
                ],
                values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 0,
          text: "w",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 1,
          text: "e",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 2,
          text: "r",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 3,
          text: "f",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 4,
          text: "w",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 5,
          text: "e",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 6,
          text: "w",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 7,
          text: "r",
        },
      ],
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "Code",
            children: [
              {
                type: "codeItem",
                children: [
                  {
                    text: "",
                  },
                ],
              },
              {
                type: "selector",
                children: [
                  {
                    text: "js",
                  },
                ],
                values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 0,
          text: "a",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 1,
          text: "s",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 2,
          text: "d",
        },
      ],
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "Code",
            children: [
              {
                type: "codeItem",
                children: [
                  {
                    text: "",
                  },
                ],
              },
              {
                type: "selector",
                children: [
                  {
                    text: "js",
                  },
                ],
                values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "Code",
            children: [
              {
                type: "codeItem",
                children: [
                  {
                    text: "",
                  },
                ],
              },
              {
                type: "selector",
                children: [
                  {
                    text: "js",
                  },
                ],
                values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "CodeSnippet",
            children: [
              {
                type: "link",
                children: [
                  {
                    text: "",
                  },
                ],
                placeholder: "Type the url",
              },
              {
                type: "selector",
                children: [
                  {
                    text: "CodeSandBox",
                  },
                ],
                values: ["CodeSandBox", "GitHub", "GitLab"],
              },
              {
                type: "title",
                children: [
                  {
                    text: "",
                  },
                ],
                placeholder: "Type the title",
              },
              {
                type: "height",
                children: [
                  {
                    text: "",
                  },
                ],
                placeholder: "Type iframe height",
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_node",
          path: [3],
          node: {
            type: "ArticleText",
            children: [
              {
                children: [
                  {
                    text: "",
                  },
                ],
                type: "paragraph",
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "Code",
            children: [
              {
                type: "codeItem",
                children: [
                  {
                    text: "",
                  },
                ],
              },
              {
                type: "selector",
                children: [
                  {
                    text: "js",
                  },
                ],
                values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
              },
            ],
          },
        },
      ],
      [
        {
          type: "insert_node",
          path: [1],
          node: {
            type: "Quote",
            children: [
              {
                type: "quoteText",
                children: [
                  {
                    text: "",
                  },
                ],
                placeholder: "Type the quote",
              },
              {
                children: [
                  {
                    text: "",
                  },
                ],
                type: "signature",
                placeholder: "Type the author",
                placeholderRight: true,
              },
            ],
          },
        },
        {
          type: "set_selection",
          properties: {
            anchor: {
              path: [0, 0, 0],
              offset: 0,
            },
            focus: {
              path: [0, 0, 0],
              offset: 0,
            },
          },
          newProperties: {
            anchor: {
              path: [1, 0, 0],
              offset: 0,
            },
            focus: {
              path: [1, 0, 0],
              offset: 0,
            },
          },
        },
      ],
      [
        {
          type: "insert_text",
          path: [1, 0, 0],
          offset: 0,
          text: "w",
        },
        {
          type: "insert_text",
          path: [1, 0, 0],
          offset: 1,
          text: "e",
        },
        {
          type: "insert_text",
          path: [1, 0, 0],
          offset: 2,
          text: "r",
        },
        {
          type: "insert_text",
          path: [1, 0, 0],
          offset: 3,
          text: "q",
        },
        {
          type: "set_selection",
          properties: {
            anchor: {
              path: [1, 0, 0],
              offset: 4,
            },
            focus: {
              path: [1, 0, 0],
              offset: 4,
            },
          },
          newProperties: {
            anchor: {
              path: [0, 0, 0],
              offset: 0,
            },
            focus: {
              path: [0, 0, 0],
              offset: 0,
            },
          },
        },
      ],
      [
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 0,
          text: "q",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 1,
          text: "w",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 2,
          text: "r",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 3,
          text: "e",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 4,
          text: "w",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 5,
          text: "q",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 6,
          text: "e",
        },
        {
          type: "insert_text",
          path: [0, 0, 0],
          offset: 7,
          text: "r",
        },
        {
          type: "set_selection",
          properties: {
            anchor: {
              path: [0, 0, 0],
              offset: 8,
            },
            focus: {
              path: [0, 0, 0],
              offset: 8,
            },
          },
          newProperties: {
            anchor: {
              path: [2, 0, 0],
              offset: 0,
            },
            focus: {
              path: [2, 0, 0],
              offset: 0,
            },
          },
        },
      ],
      [
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 0,
          text: "t",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 1,
          text: "3",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 2,
          text: "4",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 3,
          text: "g",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 4,
          text: "e",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 5,
          text: "r",
        },
        {
          type: "insert_text",
          path: [2, 0, 0],
          offset: 6,
          text: "a",
        },
      ],
    ],
    redos: [],
  },
}
