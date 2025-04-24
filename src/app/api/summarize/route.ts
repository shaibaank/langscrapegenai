import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { searchResults, query } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key is missing' }, { status: 500 });
    }

    if (!searchResults || !Array.isArray(searchResults) || !query) {
      return NextResponse.json({ error: 'Search results and query are required' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Format search results for the prompt
    const formattedResults = searchResults.map((result, index) => 
      `Source ${index + 1}: ${result.title}\nURL: ${result.link}\nSummary: ${result.snippet}\n`
    ).join('\n');

    const prompt = `You are an expert research assistant that creates comprehensive, structured summaries from search results.
    
Here is a query: "${query}"

Here are the top 5 search results:

${formattedResults}

Create a well-structured research paper with the following components:

## TITLE
- Create a concise, descriptive academic title for this research summary

## ABSTRACT
- Write a brief (150-200 words) executive summary of the key findings
- Highlight the significance of the topic and main conclusions
- Maintain a formal academic tone

## INTRODUCTION
- Provide context and background information on the topic
- Clearly state the research objective or question
- Outline the scope and structure of the paper

## LITERATURE REVIEW
- Synthesize key concepts, methods, and applications from the sources
- Identify patterns, themes, and relationships across the literature
- Present critical analysis rather than merely summarizing sources
- Use appropriate academic terminology and citations

## METHODOLOGY ASSESSMENT
- Evaluate research methods used in the source materials
- Identify strengths and limitations of current approaches
- Discuss methodological challenges in the field

## FINDINGS & DISCUSSION
- Present the most significant insights from the sources
- Analyze contradictions, consensus, and evolving perspectives
- Connect findings to broader theoretical frameworks
- Discuss implications of the findings

## RESEARCH GAPS
- Identify knowledge gaps and unresolved questions
- Highlight opportunities for further investigation
- Discuss theoretical or practical limitations in current understanding

## FUTURE RESEARCH DIRECTIONS
- Propose 3-5 specific, actionable research projects
- Outline potential methodological approaches for each
- Indicate potential impact of suggested research

## CONCLUSION
- Synthesize key findings and their significance
- Reinforce the importance of the topic and contributions made
- End with compelling closing thoughts on future developments.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ summary: text });
  } catch (error) {
    console.error('Summarize API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate summary' },
      { status: 500 }
    );
  }
} 