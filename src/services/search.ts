import 'dotenv/config';
import { Document} from 'langchain/document';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { OpenAIEmbeddings } from "@langchain/openai";

const candidates = [
  { id: 6, name: 'Alice Williams', bio: 'Alice Williams is a data scientist with a strong background in Python and R. She has worked on several data-driven projects and is known for her analytical skills.', skills: 'Python, R, Data Analysis, Machine Learning' },
  { id: 7, name: 'Bob Martin', bio: 'Bob Martin is a full-stack developer with a focus on JavaScript and Node.js. He has contributed to several open-source projects and is known for his clean code.', skills: 'JavaScript, Node.js, Express, MongoDB' },
  { id: 8, name: 'Charlie Davis', bio: 'Charlie Davis specializing in Swift and iOS development. He has a knack for creating intuitive user interfaces.', skills: 'Swift, iOS, Xcode, UI/UX' },
  { id: 9, name: 'Diana Johnson', bio: 'Diana Johnson is a software engineer with a focus on C++ and embedded systems. She has a proven track record of working on high-performance systems.', skills: 'C++, Embedded Systems, Real-Time Systems, Multithreading' },
  { id: 10, name: 'Ethan Brown', bio: 'Ethan Brown is a cloud specialist proficient in AWS and Google Cloud. He has helped several businesses migrate their systems to the cloud.', skills: 'AWS, Google Cloud, Docker, Kubernetes' }
];

const createStore = () =>
  MemoryVectorStore.fromDocuments(
    candidates.map(
      (c) =>
        new Document({
          pageContent: `Bio: ${c.bio}\n ${c.skills}`,
          metadata: { source: c.id, name: c.name },
        })
    ),
    new OpenAIEmbeddings()
  )

export const serach = async (query: string, count: number = 1) => {
  const store = await createStore();
  return store.similaritySearch(query, count);
}
