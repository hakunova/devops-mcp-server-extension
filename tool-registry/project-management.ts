import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import * as types from '../common/types.js';

export const getProjectManagementTools = () => [
  // Project Operations
  {
    name: "get_project",
    description: "[Project Management] Get information about a Yunxiao project",
    inputSchema: zodToJsonSchema(types.GetProjectSchema),
  },
  {
    name: "search_projects",
    description: "[Project Management] Search for Yunxiao Project List. A Project is a project management unit that includes work items and sprints, and it is different from a code repository (Repository).\n\nUse Cases:\n\nQuery projects I am involved in\nQuery projects I have created",
    inputSchema: zodToJsonSchema(types.SearchProjectsSchema),
  },
  {
    name: "list_project_members",
    description: "[Project Management] List members of a Yunxiao project with their roles. Returns member information including user ID, name, avatar, role ID and role name.",
    inputSchema: zodToJsonSchema(types.ListProjectMembersSchema),
  },

  // Sprint Operations
  {
    name: "get_sprint",
    description: "[Project Management] Get information about a sprint",
    inputSchema: zodToJsonSchema(types.GetSprintSchema),
  },
  {
    name: "list_sprints",
    description: "[Project Management] List sprints in a project",
    inputSchema: zodToJsonSchema(types.ListSprintsSchema),
  },
  {
    name: "create_sprint",
    description: "[Project Management] Create a new sprint",
    inputSchema: zodToJsonSchema(types.CreateSprintSchema),
  },
  {
    name: "update_sprint",
    description: "[Project Management] Update an existing sprint",
    inputSchema: zodToJsonSchema(types.UpdateSprintSchema),
  },

  // Work Item Operations
  {
    name: "get_work_item",
    description: "[Project Management] Get information about a work item",
    inputSchema: zodToJsonSchema(types.GetWorkItemSchema),
  },
  {
    name: "create_work_item",
    description: "[Project Management] Create a work item",
    inputSchema: zodToJsonSchema(types.CreateWorkItemSchema),
  },
  {
    name: "search_workitems",
    description: "[Project Management] Search work items with various filter conditions",
    inputSchema: zodToJsonSchema(types.SearchWorkitemsSchema),
  },
  {
    name: "get_work_item_types",
    description: "[Project Management] Get the list of work item types for a project",
    inputSchema: zodToJsonSchema(z.object({
      organizationId: z.string().describe("Organization ID"),
      id: z.string().describe("Project unique identifier"),
      category: z.string().describe("Work item type category, optional values: Req, Bug, Task, etc.")
    })),
  },
  {
    name: "update_work_item",
    description: "[Project Management] Update a work item",
    inputSchema: zodToJsonSchema(types.UpdateWorkItemSchema),
  },

  // Work Item Type Operations
  {
    name: "list_all_work_item_types",
    description: "[Project Management] List all work item types in an organization",
    inputSchema: zodToJsonSchema(types.ListAllWorkItemTypesSchema),
  },
  {
    name: "list_work_item_types",
    description: "[Project Management] List work item types in a project space",
    inputSchema: zodToJsonSchema(types.ListWorkItemTypesSchema),
  },
  {
    name: "get_work_item_type",
    description: "[Project Management] Get details of a specific work item type",
    inputSchema: zodToJsonSchema(types.GetWorkItemTypeSchema),
  },
  {
    name: "list_work_item_relation_work_item_types",
    description: "[Project Management] List work item types that can be related to a specific work item",
    inputSchema: zodToJsonSchema(types.ListWorkItemRelationWorkItemTypesSchema),
  },
  {
    name: "get_work_item_type_field_config",
    description: "[Project Management] Get field configuration for a specific work item type",
    inputSchema: zodToJsonSchema(types.GetWorkItemTypeFieldConfigSchema),
  },
  {
    name: "get_work_item_workflow",
    description: "[Project Management] Get workflow information for a specific work item type",
    inputSchema: zodToJsonSchema(types.GetWorkItemWorkflowSchema),
  },
  {
    name: "list_work_item_comments",
    description: "[Project Management] List comments for a specific work item",
    inputSchema: zodToJsonSchema(types.ListWorkItemCommentsSchema),
  },
  {
    name: "create_work_item_comment",
    description: "[Project Management] Create a comment for a specific work item",
    inputSchema: zodToJsonSchema(types.CreateWorkItemCommentSchema),
  },
  {
    name: "list_workitem_activities",
    description: "[Project Management] Get the activity history of a work item, including creation, updates, status transitions, association changes, and attachment changes. Returns detailed information about each activity including the operator, event time, old and new values.",
    inputSchema: zodToJsonSchema(types.ListWorkitemActivitiesSchema),
  },
  {
    name: "list_workitem_attachments",
    description: "[Project Management] Get the list of attachments for a work item. Returns attachment information including file name, file size, file suffix, download URL (temporary URL with time limit), creator and modifier info.",
    inputSchema: zodToJsonSchema(types.ListWorkitemAttachmentsSchema),
  },
  {
    name: "get_workitem_file",
    description: "[Project Management] Get a specific file information from a work item. Returns file details including file name, file size, file suffix, and a temporary download URL with time limit.",
    inputSchema: zodToJsonSchema(types.GetWorkitemFileSchema),
  },
  {
    name: "list_workitem_relation_records",
    description: "[Project Management] Get the list of related items for a work item. Returns relation records including relation type (PARENT/SUB/ASSOCIATED/DEPEND_ON/DEPENDED_BY), resource ID, resource type, and creation time.",
    inputSchema: zodToJsonSchema(types.ListWorkitemRelationRecordsSchema),
  },
  {
    name: "create_workitem_relation_record",
    description: "[Project Management] Create a relation between work items. Allows setting parent, child, associated, dependent, or supporting relationships between work items.",
    inputSchema: zodToJsonSchema(types.CreateWorkitemRelationRecordSchema),
  },
  {
    name: "delete_workitem_relation_record",
    description: "[Project Management] Delete a relation between work items. Removes the specified relationship (parent, child, associated, dependent, or supporting) between work items.",
    inputSchema: zodToJsonSchema(types.DeleteWorkitemRelationRecordSchema),
  }
];
