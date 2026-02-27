---
name: mcp-granola
description: 'Call tools from the Granola MCP server through code_execution callbacks. Available tools: mcpGranola_getMeetingTranscript, mcpGranola_getMeetings, mcpGranola_listMeetings, mcpGranola_queryGranolaMeetings. Reference skill for more information.'
---

# MCP Skill: Granola

Use this skill when you need data or actions from this MCP server.

## Available Functions

### mcpGranola_getMeetingTranscript(...)

Get the full transcript for a specific Granola meeting by ID. Returns only the verbatim transcript content, not summaries or notes.
Use this when the user needs exact quotes, specific wording, or wants to review what was literally said in a meeting. For summarized content or action items, use query_granola_meetings or list_meetings/get_meetings instead.

**Parameters:**

- `meeting_id` (string, required): Meeting UUID

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpGranola_getMeetingTranscript({ meeting_id: "" });
console.log(result);
```

### mcpGranola_getMeetings(...)

Get detailed meeting information for one or more Granola meetings by ID. Returns private notes, AI-generated summary, attendees, and metadata.
Use this when you already have specific meeting IDs (e.g. from list_meetings results). For open-ended questions about meeting content, use query_granola_meetings instead.

**Parameters:**

- `meeting_ids` (array, required): Array of meeting UUIDs (max 10)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpGranola_getMeetings({ meeting_ids: [] });
console.log(result);
```

### mcpGranola_listMeetings(...)

List the user's Granola meeting notes within a time range. Returns meeting titles and metadata.

IMPORTANT: For short-term questions about recent meeting details, prefer using query_granola_meetings instead.

When to use:
- User asks to list their meetings
- User asks about action items, decisions, or summaries from meetings over a longer or specific date range
- User asks about content from their meeting transcripts
- User references 'Granola notes' or 'meeting notes' or 'transcripts'

When NOT to use:
- User is asking about upcoming calendar events or scheduling
- User wants to create/modify calendar invites

Use get_meetings to retrieve detailed meeting content after identifying relevant meetings.

**Parameters:**

- `time_range` (string, optional): Time range to query meetings from
- `custom_start` (string, optional): ISO date for custom range start (required if time_range is 'custom')
- `custom_end` (string, optional): ISO date for custom range end (required if time_range is 'custom')

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpGranola_listMeetings({ time_range: "last_30_days", custom_start: "", custom_end: "" });
console.log(result);
```

### mcpGranola_queryGranolaMeetings(...)

Query Granola about the user's meetings using natural language. Returns a tailored response with inline citation links in mark  (e.g. [[0]](url)) that reference source meeting notes.

IMPORTANT: The response includes numbered citation links to specific Granola meeting notes. These citations MUST be preserved in your response to the user — they provide transparency and allow the user to verify information by clicking through to the original notes.

When to use:
- User asks about what was discussed, decided, or action-items from meetings
- User asks about follow-ups, todos, or commitments from recent meetings
- User references 'Granola notes' or 'meeting notes'

When NOT to use:
- User is asking about calendar scheduling or upcoming events
- User explicitly asks for a specific meeting by ID (use get_meetings instead)

Prioritize using query_granola_meetings over list_meetings/get_meetings for open-ended or natural language queries about meeting content.

**Parameters:**

- `query` (string, required): The query to run on Granola meeting notes
- `document_ids` (array, optional): Optional list of specific meeting IDs to limit context to

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpGranola_queryGranolaMeetings({ query: "", document_ids: [] });
console.log(result);
```

## Blocked Tools

- None

## Notes

- Call these functions directly in `code_execution` JavaScript.
- These are pre-registered callbacks available in the sandbox; no imports needed.
