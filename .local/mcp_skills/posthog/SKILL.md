---
name: mcp-posthog
description: 'Call tools from the PostHog MCP server through code_execution callbacks. Available tools: mcpPostHog_actionCreate, mcpPostHog_actionDelete, mcpPostHog_actionGet, mcpPostHog_actionUpdate, mcpPostHog_actionsGetAll, mcpPostHog_addInsightToDashboard, mcpPostHog_createFeatureFlag, mcpPostHog_dashboardCreate, mcpPostHog_dashboardDelete, mcpPostHog_dashboardGet, mcpPostHog_dashboardReorderTiles, mcpPostHog_dashboardUpdate, mcpPostHog_dashboardsGetAll, mcpPostHog_deleteFeatureFlag, mcpPostHog_demoMcpUiApps, mcpPostHog_docsSearch, mcpPostHog_entitySearch, mcpPostHog_errorDetails, mcpPostHog_eventDefinitionUpdate, mcpPostHog_eventDefinitionsList, mcpPostHog_experimentCreate, mcpPostHog_experimentDelete, mcpPostHog_experimentGet, mcpPostHog_experimentGetAll, mcpPostHog_experimentResultsGet, mcpPostHog_experimentUpdate, mcpPostHog_featureFlagGetAll, mcpPostHog_featureFlagGetDefinition, mcpPostHog_getLlmTotalCostsForProject, mcpPostHog_insightCreateFromQuery, mcpPostHog_insightDelete, mcpPostHog_insightGet,
  mcpPostHog_insightQuery, mcpPostHog_insightUpdate, mcpPostHog_insightsGetAll, mcpPostHog_listErrors, mcpPostHog_logsListAttributeValues, mcpPostHog_logsListAttributes, mcpPostHog_logsQuery, mcpPostHog_organizationDetailsGet, mcpPostHog_organizationsGet, mcpPostHog_projectsGet, mcpPostHog_propertiesList, mcpPostHog_queryGenerateHogqlFromQuestion, mcpPostHog_queryRun, mcpPostHog_surveyCreate, mcpPostHog_surveyDelete, mcpPostHog_surveyGet, mcpPostHog_surveyStats, mcpPostHog_surveyUpdate, mcpPostHog_surveysGetAll, mcpPostHog_surveysGlobalStats, mcpPostHog_switchOrganization, mcpPostHog_switchProject, mcpPostHog_updateFeatureFlag. Reference skill for more information.'
---

# MCP Skill: PostHog

Use this skill when you need data or actions from this MCP server.

## Available Functions

### mcpPostHog_actionCreate(...)

Create a new action in the project. Actions define reusable event triggers based on page views, clicks, form submissions, or custom events. At least one step is required.

**Parameters:**

- `name` (string, required): Name of the action (must be unique within the project)
- `description` (string, optional): Description of what this action represents
- `steps` (array, required): Action steps - each step defines a trigger condition. Multiple steps are OR-ed together.
- `tags` (array, optional): Tags for organizing actions
- `post_to_slack` (boolean, optional): Whether to post to Slack when this action is triggered
- `slack_message_format` (string, optional): Custom Slack message format

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_actionCreate({ name: "", description: "", steps: [], tags: [], post_to_slack: false, slack_message_format: "" });
console.log(result);
```

### mcpPostHog_actionDelete(...)

Delete an action by ID. The action will no longer appear in lists but historical data is preserved.

**Parameters:**

- `actionId` (integer, required): The ID of the action to delete

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_actionDelete({ actionId: 0 });
console.log(result);
```

### mcpPostHog_actionGet(...)

Get a specific action by ID. Returns the action configuration including all steps and their trigger conditions.

**Parameters:**

- `actionId` (integer, required): The ID of the action to retrieve

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_actionGet({ actionId: 0 });
console.log(result);
```

### mcpPostHog_actionUpdate(...)

Update an existing action by ID. Can update name, description, steps, tags, and Slack notification settings.

**Parameters:**

- `actionId` (integer, required): The ID of the action to update
- `data` (object, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_actionUpdate({ actionId: 0, data: {} });
console.log(result);
```

### mcpPostHog_actionsGetAll(...)

Get all actions in the project. Actions are reusable event definitions that can combine multiple trigger conditions (page views, clicks, form submissions) into a single trackable event for use in insights and funnels.

**Parameters:**

- `data` (object, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_actionsGetAll({ data: {} });
console.log(result);
```

### mcpPostHog_addInsightToDashboard(...)

Add an existing insight to a dashboard. Requires insight ID and dashboard ID. Optionally supports layout and color customization.

**Parameters:**

- `data` (object, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_addInsightToDashboard({ data: {} });
console.log(result);
```

### mcpPostHog_createFeatureFlag(...)

Creates a new feature flag in the project. Once you have created a feature flag, you should: Ask the user if they want to add it to their codebase, Use the "search-docs" tool to find documentation on how to add feature flags to the codebase (search for the right language / framework), Clarify where it should be added and then add it.

**Parameters:**

- `name` (string, required)
- `key` (string, required)
- `description` (string, required)
- `filters` (object, required)
- `active` (boolean, required)
- `tags` (array, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_createFeatureFlag({ name: "", key: "", description: "", filters: {}, active: false, tags: [] });
console.log(result);
```

### mcpPostHog_dashboardCreate(...)

Create a new dashboard in the project. Requires name and optional description, tags, and other properties.

**Parameters:**

- `data` (object, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_dashboardCreate({ data: {} });
console.log(result);
```

### mcpPostHog_dashboardDelete(...)

Delete a dashboard by ID (soft delete - marks as deleted).

**Parameters:**

- `dashboardId` (number, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_dashboardDelete({ dashboardId: 0 });
console.log(result);
```

### mcpPostHog_dashboardGet(...)

Get a specific dashboard by ID. The response will include insights / tiles that are on the dashboard.

**Parameters:**

- `dashboardId` (number, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_dashboardGet({ dashboardId: 0 });
console.log(result);
```

### mcpPostHog_dashboardReorderTiles(...)

Reorder tiles (insights) on a dashboard. Provide an array of tile IDs in the desired order from top to bottom. First, use dashboard-get to retrieve the dashboard and see the current tile IDs, then provide the tile IDs in your desired order.

**Parameters:**

- `dashboardId` (integer, required): The ID of the dashboard to reorder tiles on
- `tileOrder` (array, required): Array of tile IDs in the desired order from top to bottom

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_dashboardReorderTiles({ dashboardId: 0, tileOrder: [] });
console.log(result);
```

### mcpPostHog_dashboardUpdate(...)

Update an existing dashboard by ID. Can update name, description, pinned status or tags.

**Parameters:**

- `dashboardId` (number, required)
- `data` (object, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_dashboardUpdate({ dashboardId: 0, data: {} });
console.log(result);
```

### mcpPostHog_dashboardsGetAll(...)

Get all dashboards in the project with optional filtering. Can filter by pinned status, search term, or pagination.

**Parameters:**

- `data` (object, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_dashboardsGetAll({ data: {} });
console.log(result);
```

### mcpPostHog_deleteFeatureFlag(...)

Delete a feature flag in the project.

**Parameters:**

- `flagKey` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_deleteFeatureFlag({ flagKey: "" });
console.log(result);
```

### mcpPostHog_demoMcpUiApps(...)

Demo tool for testing MCP Apps SDK integration. Returns sample data that is displayed in an interactive UI app. Use this to verify that MCP Apps are working correctly.

**Parameters:**

- `message` (string, optional): Optional message to include in the demo data

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_demoMcpUiApps({ message: "" });
console.log(result);
```

### mcpPostHog_docsSearch(...)

Use this tool to search the PostHog documentation for information that can help the user with their request. Use it as a fallback when you cannot answer the user's request using other tools in this MCP. Only use this tool for PostHog related questions.

**Parameters:**

- `query` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_docsSearch({ query: "" });
console.log(result);
```

### mcpPostHog_entitySearch(...)

Search for PostHog entities by name or description. Can search across multiple entity types including insights, dashboards, experiments, feature flags, notebooks, actions, cohorts, event definitions, and surveys. Use this to find entities when you know part of their name. Returns matching entities with their IDs and URLs.

**Parameters:**

- `query` (string, required): Search query to find entities by name or description
- `entities` (array, optional): Entity types to search. If not specified, searches all types. Available: insight, dashboard, experiment, feature_flag, notebook, action, cohort, event_definition, survey

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_entitySearch({ query: "", entities: [] });
console.log(result);
```

### mcpPostHog_errorDetails(...)

Use this tool to get the details of an error in the project.

**Parameters:**

- `issueId` (string, required)
- `dateFrom` (string, optional)
- `dateTo` (string, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_errorDetails({ issueId: "", dateFrom: "", dateTo: "" });
console.log(result);
```

### mcpPostHog_eventDefinitionUpdate(...)

Update event definition metadata. Can update description, tags, mark status as verified or hidden. Use exact event name like '$pageview' or 'user_signed_up'.

**Parameters:**

- `eventName` (string, required): The name of the event to update (e.g. "$pageview", "user_signed_up")
- `data` (object, required): The event definition data to update

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_eventDefinitionUpdate({ eventName: "", data: {} });
console.log(result);
```

### mcpPostHog_eventDefinitionsList(...)

List all event definitions in the project with optional filtering. Can filter by search term.

**Parameters:**

- `q` (string, optional): Search query to filter event names. Only use if there are lots of events.
- `limit` (integer, optional)
- `offset` (integer, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_eventDefinitionsList({ q: "", limit: 0, offset: 0 });
console.log(result);
```

### mcpPostHog_experimentCreate(...)

Create a comprehensive A/B test experiment. PROCESS: 1) Understand experiment goal and hypothesis 2) Search existing feature flags with 'feature-flags-get-all' tool first and suggest reuse or new key 3) Help user define success metrics by asking what they want to optimize 4) MOST IMPORTANT: Use 'event-definitions-list' tool to find available events in their project 5) For funnel metrics, ask for specific event sequence (e.g., ['product_view', 'add_to_cart', 'purchase']) and use funnel_steps parameter 6) Configure variants (default 50/50 control/test unless they specify otherwise) 7) Set targeting criteria if needed.

**Parameters:**

- `name` (string, required): Experiment name - should clearly describe what is being tested
- `description` (string, optional): Detailed description of the experiment hypothesis, what changes are being tested, and expected outcomes
- `feature_flag_key` (string, required): Feature flag key (letters, numbers, hyphens, underscores only). IMPORTANT: First search for existing feature flags that might be suitable using the feature-flags-get-all tool, then suggest reusing existing ones or creating a new key based on the experiment name
- `primary_metrics` (array, optional): Primary metrics to measure experiment success. IMPORTANT: Each metric needs event_name to track data. For funnels, provide funnel_steps array with event names for each step. Ask user what events they track, or use project-property-definitions to find available events.
- `secondary_metrics` (array, optional): Secondary metrics to monitor for potential side effects or additional insights. Each metric needs event_name.
- `variants` (array, optional): Experiment variants. If not specified, defaults to 50/50 control/test split. Ask user how many variants they need and what each tests
- `minimum_detectable_effect` (number, optional): Minimum detectable effect in percentage. Lower values require more users but detect smaller changes. Suggest 20-30% for most experiments
- `filter_test_accounts` (boolean, optional): Whether to filter out internal test accounts
- `target_properties` (object, optional): Properties to target specific user segments (e.g., country, subscription type)
- `draft` (boolean, optional): Create as draft (true) or launch immediately (false). Recommend draft for review first
- `holdout_id` (number, optional): Holdout group ID if this experiment should exclude users from other experiments

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_experimentCreate({ name: "", description: "", feature_flag_key: "", primary_metrics: [], secondary_metrics: [], variants: [], minimum_detectable_effect: 30, filter_test_accounts: true, target_properties: {}, draft: true, holdout_id: 0 });
console.log(result);
```

### mcpPostHog_experimentDelete(...)

Delete an experiment by ID.

**Parameters:**

- `experimentId` (number, required): The ID of the experiment to delete

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_experimentDelete({ experimentId: 0 });
console.log(result);
```

### mcpPostHog_experimentGet(...)

Get details of a specific experiment by ID.

**Parameters:**

- `experimentId` (number, required): The ID of the experiment to retrieve

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_experimentGet({ experimentId: 0 });
console.log(result);
```

### mcpPostHog_experimentGetAll(...)

Get all experiments in the project.

**Parameters:**

- `data` (object, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_experimentGetAll({ data: {} });
console.log(result);
```

### mcpPostHog_experimentResultsGet(...)

Get comprehensive experiment results including all metrics data (primary and secondary) and exposure data. This tool fetches the experiment details and executes the necessary queries to get complete experiment results. Only works with new experiments (not legacy experiments).

**Parameters:**

- `experimentId` (number, required): The ID of the experiment to get comprehensive results for
- `refresh` (boolean, required): Force refresh of results instead of using cached values

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_experimentResultsGet({ experimentId: 0, refresh: false });
console.log(result);
```

### mcpPostHog_experimentUpdate(...)

Update an existing experiment by ID. Can update name, description, lifecycle state, variants, metrics, and other properties. RESTART WORKFLOW: To restart a concluded experiment, set end_date=null, conclusion=null, conclusion_comment=null, and optionally set a new start_date. To make it draft again, also set start_date=null. COMMON PATTERNS: Launch draft (set start_date), stop running (set end_date + conclusion), archive (set archived=true), modify variants (update parameters.feature_flag_variants). NOTE: feature_flag_key cannot be changed after creation.

**Parameters:**

- `experimentId` (number, required): The ID of the experiment to update
- `data` (object, required): The experiment data to update using user-friendly format

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_experimentUpdate({ experimentId: 0, data: {} });
console.log(result);
```

### mcpPostHog_featureFlagGetAll(...)

Get all feature flags in the project.

**Parameters:**

- `data` (object, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_featureFlagGetAll({ data: {} });
console.log(result);
```

### mcpPostHog_featureFlagGetDefinition(...)

Get the definition of a feature flag. You can provide either the flagId or the flagKey. If you provide both, the flagId will be used.

**Parameters:**

- `flagId` (integer, optional)
- `flagKey` (string, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_featureFlagGetDefinition({ flagId: 0, flagKey: "" });
console.log(result);
```

### mcpPostHog_getLlmTotalCostsForProject(...)

Fetches the total LLM daily costs for each model for a project over a given number of days. If no number of days is provided, it defaults to 7. The results are sorted by model name. The total cost is rounded to 4 decimal places. The query is executed against the project's data warehouse. Show the results as a Markdown formatted table with the following information for each model: Model name, Total cost in USD, Each day's date, Each day's cost in USD. Write in bold the model name with the highest total cost. Properly render the markdown table in the response.

**Parameters:**

- `projectId` (integer, required)
- `days` (number, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_getLlmTotalCostsForProject({ projectId: 0, days: 0 });
console.log(result);
```

### mcpPostHog_insightCreateFromQuery(...)

Create an insight from a query that you have previously tested with 'query-run'. You should check the query runs, before creating an insight. Do not create an insight before running the query, unless you know already that it is correct (e.g. you are making a minor modification to an existing query you have seen).

**Parameters:**

- `data` (object, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_insightCreateFromQuery({ data: {} });
console.log(result);
```

### mcpPostHog_insightDelete(...)

Delete an insight by ID (soft delete - marks as deleted).

**Parameters:**

- `insightId` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_insightDelete({ insightId: "" });
console.log(result);
```

### mcpPostHog_insightGet(...)

Get a specific insight by ID.

**Parameters:**

- `insightId` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_insightGet({ insightId: "" });
console.log(result);
```

### mcpPostHog_insightQuery(...)

Execute a query on an existing insight to get its results/data. Provide the insight ID to retrieve the current query results.

**Parameters:**

- `insightId` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_insightQuery({ insightId: "" });
console.log(result);
```

### mcpPostHog_insightUpdate(...)

Update an existing insight by ID. Can update name, description, filters, and other properties. You should get the insight before update it to see it's current query structure, and only modify the parts needed to answer the user's request.

**Parameters:**

- `insightId` (string, required)
- `data` (object, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_insightUpdate({ insightId: "", data: {} });
console.log(result);
```

### mcpPostHog_insightsGetAll(...)

Get all insights in the project with optional filtering. Can filter by saved status, favorited status, or search term.

**Parameters:**

- `data` (object, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_insightsGetAll({ data: {} });
console.log(result);
```

### mcpPostHog_listErrors(...)

Use this tool to list errors in the project.

**Parameters:**

- `orderBy` (string, optional)
- `dateFrom` (string, optional)
- `dateTo` (string, optional)
- `orderDirection` (string, optional)
- `filterTestAccounts` (boolean, optional)
- `status` (string, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_listErrors({ orderBy: "occurrences", dateFrom: "", dateTo: "", orderDirection: "ASC", filterTestAccounts: false, status: "active" });
console.log(result);
```

### mcpPostHog_logsListAttributeValues(...)

Get possible values for a specific log attribute. Use this to discover what values exist for a given attribute key, which helps when building log queries with filters.

**Parameters:**

- `key` (string, required): The attribute key to get values for
- `attributeType` (string, optional): Type of attribute: "log" for log attributes, "resource" for resource attributes (default: log)
- `search` (string, optional): Search filter for attribute values

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_logsListAttributeValues({ key: "", attributeType: "log", search: "" });
console.log(result);
```

### mcpPostHog_logsListAttributes(...)

List available log attributes in the project. Use this to discover what attributes you can filter on when querying logs. Supports filtering by attribute type (log or resource) and searching by attribute name.

**Parameters:**

- `search` (string, optional): Search filter for attribute names
- `attributeType` (string, optional): Type of attributes to list: "log" for log attributes, "resource" for resource attributes (default: log)
- `limit` (integer, optional): Maximum number of results (1-100, default: 100)
- `offset` (integer, optional): Offset for pagination (default: 0)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_logsListAttributes({ search: "", attributeType: "log", limit: 0, offset: 0 });
console.log(result);
```

### mcpPostHog_logsQuery(...)

Search and query logs in the project. Supports filtering by severity levels (trace, debug, info, warn, error, fatal), service names, date range, and free text search. Returns log entries with their attributes, timestamps, and trace information. Supports pagination via cursor.

**Parameters:**

- `dateFrom` (string, required): Start of date range (ISO 8601 format, e.g., "2024-01-01T00:00:00Z")
- `dateTo` (string, required): End of date range (ISO 8601 format, e.g., "2024-01-02T00:00:00Z")
- `severityLevels` (array, optional): Filter by severity levels (trace, debug, info, warn, error, fatal)
- `serviceNames` (array, optional): Filter by service names
- `searchTerm` (string, optional): Free text search term to filter logs
- `orderBy` (string, optional): Order results by timestamp (default: latest)
- `limit` (integer, optional): Maximum number of results (1-1000, default: 100)
- `after` (string, optional): Cursor for pagination (from previous response nextCursor)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_logsQuery({ dateFrom: "", dateTo: "", severityLevels: [], serviceNames: [], searchTerm: "", orderBy: "latest", limit: 0, after: "" });
console.log(result);
```

### mcpPostHog_organizationDetailsGet(...)

Get the details of the active organization.

**Parameters:** None.

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_organizationDetailsGet();
console.log(result);
```

### mcpPostHog_organizationsGet(...)

Get the organizations the user has access to.

**Parameters:** None.

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_organizationsGet();
console.log(result);
```

### mcpPostHog_projectsGet(...)

Fetches projects that the user has access to in the current organization.

**Parameters:** None.

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_projectsGet();
console.log(result);
```

### mcpPostHog_propertiesList(...)

List properties for events or persons. If fetching event properties, you must provide an event name.

**Parameters:**

- `type` (string, required): Type of properties to get
- `eventName` (string, optional): Event name to filter properties by, required for event type
- `includePredefinedProperties` (boolean, optional): Whether to include predefined properties
- `limit` (integer, optional)
- `offset` (integer, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_propertiesList({ type: "event", eventName: "", includePredefinedProperties: false, limit: 0, offset: 0 });
console.log(result);
```

### mcpPostHog_queryGenerateHogqlFromQuestion(...)

This is a slow tool, and you should only use it once you have tried to create a query using the 'query-run' tool, or the query is too complicated to create a trend / funnel. Queries project's PostHog data based on a provided natural language question - don't provide SQL query as input but describe the output you want. When giving the results back to the user, first show the SQL query that was used, then provide results in easily readable format. You should also offer to save the query as an insight if the user wants to.

**Parameters:**

- `question` (string, required): Your natural language query describing the SQL insight (max 1000 characters).

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_queryGenerateHogqlFromQuestion({ question: "" });
console.log(result);
```

### mcpPostHog_queryRun(...)

You should use this to answer questions that a user has about their data and for when you want to create a new insight. You can use 'event-definitions-list' to get events to use in the query, and 'event-properties-list' to get properties for those events. It can run a trend, funnel or HogQL query. Where possible, use a trend or funnel rather than a HogQL query, unless you know the HogQL is correct (e.g. it came from a previous insight.).

**Parameters:**

- `query` (any, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_queryRun({ query: "" });
console.log(result);
```

### mcpPostHog_surveyCreate(...)

Creates a new survey in the project. Surveys can be popover or API-based and support various question types including open-ended, multiple choice, rating, and link questions. Once created, you should ask the user if they want to add the survey to their application code.

**Parameters:**

- `name` (string, required)
- `description` (string, optional)
- `type` (string, optional)
- `questions` (array, required)
- `appearance` (object, optional)
- `start_date` (any, optional): Setting this will launch the survey immediately. Don't add a start_date unless explicitly requested to do so.
- `responses_limit` (any, optional): The maximum number of responses before automatically stopping the survey.
- `iteration_count` (any, optional): For a recurring schedule, this field specifies the number of times the survey should be shown to the user. Use 1 for 'once every X days', higher numbers for multiple repetitions. Works together with iteration_frequency_days to determine the overall survey schedule.
- `iteration_frequency_days` (any, optional): For a recurring schedule, this field specifies the interval in days between each survey instance shown to the user, used alongside iteration_count for precise scheduling.
- `enable_partial_responses` (boolean, optional): When at least one question is answered, the response is stored (true). The response is stored when all questions are answered (false).
- `linked_flag_id` (number | null, optional): The feature flag linked to this survey
- `targeting_flag_filters` (object, optional): Target specific users based on their properties. Example: {groups: [{properties: [{key: 'email', value: ['@company.com'], operator: 'icontains'}], rollout_percentage: 100}]}

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_surveyCreate({ name: "", description: "", type: "popover", questions: [], appearance: {}, start_date: null, responses_limit: "", iteration_count: "", iteration_frequency_days: "", enable_partial_responses: false, linked_flag_id: 0, targeting_flag_filters: {} });
console.log(result);
```

### mcpPostHog_surveyDelete(...)

Delete a survey by ID (soft delete - marks as archived).

**Parameters:**

- `surveyId` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_surveyDelete({ surveyId: "" });
console.log(result);
```

### mcpPostHog_surveyGet(...)

Get a specific survey by ID. Returns the survey configuration including questions, targeting, and scheduling details.

**Parameters:**

- `surveyId` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_surveyGet({ surveyId: "" });
console.log(result);
```

### mcpPostHog_surveyStats(...)

Get response statistics for a specific survey. Includes detailed event counts (shown, dismissed, sent), unique respondents, conversion rates, and timing data. Supports optional date filtering.

**Parameters:**

- `survey_id` (string, required)
- `date_from` (string, optional): Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
- `date_to` (string, optional): Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_surveyStats({ survey_id: "", date_from: "", date_to: "" });
console.log(result);
```

### mcpPostHog_surveyUpdate(...)

Update an existing survey by ID. Can update name, description, questions, scheduling, and other survey properties.

**Parameters:**

- `name` (string, optional)
- `description` (string, optional)
- `type` (string, optional)
- `questions` (array, optional)
- `conditions` (object, optional)
- `appearance` (object, optional)
- `schedule` (string, optional): Survey scheduling behavior: 'once' = show once per user (default), 'recurring' = repeat based on iteration_count and iteration_frequency_days settings, 'always' = show every time conditions are met (mainly for widget surveys)
- `start_date` (string, optional): When the survey should start being shown to users. Setting this will launch the survey
- `end_date` (string, optional): When the survey stopped being shown to users. Setting this will complete the survey.
- `archived` (boolean, optional)
- `responses_limit` (any, optional): The maximum number of responses before automatically stopping the survey.
- `iteration_count` (any, optional): For a recurring schedule, this field specifies the number of times the survey should be shown to the user. Use 1 for 'once every X days', higher numbers for multiple repetitions. Works together with iteration_frequency_days to determine the overall survey schedule.
- `iteration_frequency_days` (any, optional): For a recurring schedule, this field specifies the interval in days between each survey instance shown to the user, used alongside iteration_count for precise scheduling.
- `enable_partial_responses` (boolean, optional): When at least one question is answered, the response is stored (true). The response is stored when all questions are answered (false).
- `linked_flag_id` (number | null, optional): The feature flag to link to this survey
- `targeting_flag_id` (number, optional): An existing targeting flag to use for this survey
- `targeting_flag_filters` (object, optional): Target specific users based on their properties. Example: {groups: [{properties: [{key: 'email', value: ['@company.com'], operator: 'icontains'}], rollout_percentage: 50}]}
- `remove_targeting_flag` (boolean, optional): Set to true to completely remove all targeting filters from the survey, making it visible to all users (subject to other display conditions like URL matching).
- `surveyId` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_surveyUpdate({ name: "", description: "", type: "popover", questions: [], conditions: {}, appearance: {}, schedule: "once", start_date: "", end_date: "", archived: false, responses_limit: "", iteration_count: "", iteration_frequency_days: "", enable_partial_responses: false, linked_flag_id: 0, targeting_flag_id: 0, targeting_flag_filters: {}, remove_targeting_flag: false, surveyId: "" });
console.log(result);
```

### mcpPostHog_surveysGetAll(...)

Get all surveys in the project with optional filtering. Can filter by search term or use pagination.

**Parameters:**

- `limit` (number, optional)
- `offset` (number, optional)
- `search` (string, optional)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_surveysGetAll({ limit: 0, offset: 0, search: "" });
console.log(result);
```

### mcpPostHog_surveysGlobalStats(...)

Get aggregated response statistics across all surveys in the project. Includes event counts (shown, dismissed, sent), unique respondents, conversion rates, and timing data. Supports optional date filtering.

**Parameters:**

- `date_from` (string, optional): Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
- `date_to` (string, optional): Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_surveysGlobalStats({ date_from: "", date_to: "" });
console.log(result);
```

### mcpPostHog_switchOrganization(...)

Change the active organization from the default organization. You should only use this tool if the user asks you to change the organization - otherwise, the default organization will be used.

**Parameters:**

- `orgId` (string, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_switchOrganization({ orgId: "" });
console.log(result);
```

### mcpPostHog_switchProject(...)

Change the active project from the default project. You should only use this tool if the user asks you to change the project - otherwise, the default project will be used.

**Parameters:**

- `projectId` (integer, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_switchProject({ projectId: 0 });
console.log(result);
```

### mcpPostHog_updateFeatureFlag(...)

Update a new feature flag in the project. To enable a feature flag, you should make sure it is active and the rollout percentage is set to 100 for the group you want to target. To disable a feature flag, you should make sure it is inactive, you can keep the rollout percentage as it is.

**Parameters:**

- `flagKey` (string, required)
- `data` (object, required)

**Returns:** Object with `status`, `content`, and optional metadata.

**Example:**

```javascript
const result = await mcpPostHog_updateFeatureFlag({ flagKey: "", data: {} });
console.log(result);
```

## Blocked Tools

- None

## Notes

- Call these functions directly in `code_execution` JavaScript.
- These are pre-registered callbacks available in the sandbox; no imports needed.
