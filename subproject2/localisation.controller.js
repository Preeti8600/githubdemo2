var lang_id = 'en';
export async function getLocalisationTexts(req, res, next) {
        lang_id = req.query.lang_id;
        module.exports.language = lang_id;
        res.json(language_data[lang_id]);
}

var language_data = {
    en: {
        "account_deleted": "Your gamma account is deleted.",
        "machine_key": "Machine Key",
        "activation_key": "Activation Key",
        "account_deactivated": "Your gamma account is deactivated.",
        "permissions_updated": "Your permissions on gamma have been changed.",
        "general": "General",
        "navigate_with": "Navigation",
        "tree": "Tree",
        "node_summary": "Node Summary",
        "change_password": "Change Password",
        "gamma_doc": "Gamma Reference",
        "version": "Version",
        "about_gamma": "About gamma",
        "gamma_help": "Help",
        "users": "Users",
        "projects": "Projects",
        "global_permissions": "Global Roles",
        "current_analysis": "Current Scan",
        "analysis_queue": "Scan Queue",
        "analysis": "Scan",
        "company": "Company",
        "changeOverview": "Changes",
        "subsystemOverview": "Repository Overview",
        "dashboard": "Dashboard",
        "changeList": "Change List",
        "issue_distribution": "Issue Distribution",
        "hotspotDistribution": "Hotspot Distribution",
        "change_overview.changed_components": "Components Changed",
        "change_overview.removed_components": "Components Removed",
        "change_overview.added_components": "Components Added",
        "change_overview.hotspots_added": "New hotspots added",
        "change_overview.hotspots_created": "Components became hotspots",
        "change_overview.hotspots_deleted": "Hotspots deleted",
        "change_overview.hotspots_removed": "Hotspots fixed",
        "change_overview.hotspots_improved": "Existing hotspots improved",
        "change_overview.hotspots_deteriorated": "Existing hotspots deteriorated",
        "hotspots_added": "Added Hotspots",
        "hotspots_created": "Created Hotspots",
        "hotspots_deleted": "Deleted Hotspots",
        "hotspots_removed": "Fixed Hotspots",
        "hotspots_improved": "Improved Hotspots",
        "hotspots_deteriorated": "Deteriorated Hotspots",
        "release_cost": "Release Cost",
        "cost_per_loc": "LOC/1000€",
        "edit_release_cost": "Edit Release Cost",
        "overall_duplication": "Overall Duplication",

        "system_heatmap": "System Overview",
        "release_management": "Cost Monitor",
        "subsystem_dashboard": "Repository Dashboard",
        "subsystem_overview": "Repository Overview",
        "component_list": "Component List",
        "change_overview": "Changes",
        "change_list": "Changed Components",
        "heatmap": "Heatmap",
        "heatmap.rating_scale": "Rating Scale",
        "city_view": "City View",
        "hotspot_distribution": "Hotspot Distribution",
        "design_issue_details": "Design Issues Distribution",
        "metrics_details": "Metrics Distribution",
        "duplication_details": "Duplication Distribution",
        "code_issues_details": "Code Issues Distribution",
        "component_explorer": "Component Explorer",
        "file_explorer": "File Explorer",
        "dependency_plot": "Dependency Plot",
        "module_dependency": "Module Dependency",
        "component_dependency": "Component Dependency",
        "partitions": "Partitions",

        "dataUnavailable": "Data Unavailable",
        "available": "Available",
        "all": "All",
        "pages": "Pages",
        "components": "Components",
        "showing": "Showing",
        "trend": "Trend",
        "changeIn": "changes",
        "manage_subsystem": "Manage Repositories",
        "manage_system": "Manage Projects",
        "explore_subsystem": "Explore Repositories",
        "account_config": "Account & Config",
        "log_out": "Log Out",
        "hot_components": "Hot Components",

        "plotting_options": "Options",
        "plugin_options": "Plugin Options",
        "top": "Top",
        "bottom": "Bottom",
        "by_loc": "Hotspot ELOC",
        "by_modules": "Modules",
        "by_tags": "Tags",
        "by_hotspot_count": "Hotspot Count",
        "issue_type": "Issue Criticality",
        "issue_name": "Issue Type",
        "criticalHotspots": "Critical Hotspots",
        "highHotspots": "High Hotspots",
        "mediumHotspots": "Medium Hotspots",
        "notHotspots": "No Hotspots",
        "new": "New Components",
        "releaseManagement.new": "New",
        "releaseManagement.maintenance": "Mantainance",
        "releaseManagement.good": "Good",
        "releaseManagement.bad": "Issues",
        "old": "Removed Components",
        "plot_by": "Plot by",
        "y_axis": "Colors",
        "y_axis_hotspots": "Y axis",
        "x_axis_hotspots": "X axis",
        "Sub-systems": "Sub-systems",
        "snapshots": "Snapshots",
        "snapshot": "Snapshot",
        "snapshotsAvailable": "Snapshots Available",
        "snapshotAvailable": "Snapshot Available",
        "levelsAvailable": "Levels Available",
        "levelAvailable": "Level Available",
        "filters": "Filters",
        "mode": "Mode",
        "filterLevel": "Filter By Level",
        "filterTree": "Filter By Tree",
        "selectLevel": "Select Level",
        "availableLevels": "Available Levels",
        "searchSubsystem": "Search Repository",
        "searchNode": "Search Selected Node",
        "Search": "Search",

        "Node Summary": "Node Summary",
        "Component Summary": "Component Summary",
        "designIssues": "Design Issues",
        "GC": "God Class",
        "BC": "Brain Class",
        "BM": "Brain Method",
        "GB": "Global Butterfly",
        "GBU": "Global Butterfly",
        "GBR": "Global Breakable",
        "LB": "Local Butterfly",
        "LBU": "Local Butterfly",
        "LBR": "Local Breakable",
        "GH": "Global Hub",
        "IC": "Intensive Coupling",
        "DC": "Dispersed Coupling",
        "SS": "Shotgun Surgery",
        "TH": "Test Hungry",
        "FE": "Feature Envy",
        "CSS": "Code Smell Severe",
        "CSW": "Code Smell Warning",
        "CSI": "Code Smell Info",
        "DCD": "Direct Cyclic Dependency",
        "HB": "Helper Base",
        "RPB": "Refused Parent Bequest",
        "TB": "Tradition Breaker",
        "FI": "Fat Interface",
        "FIC": "Fat Interface",
        "FME": "Format Exposure",
        "SSP": "Solution Sprawl",
        "DCL": "Decapsulation",
        "DE": "Data Exposure",
        "MC": "Message Chain",
        "FO": "Fan Out",
		"GV": "Global Variable",
        "UM": "Unused Method",
        "MF":"Monster File",
        "FC":"File Coupling",
        "CF":"Convolute Function",
        "CC":"Convolute Closure",

        "duplication": "Duplication",
        "no_duplication": "No duplication",
        "codeDuplication": "Code Duplication",
        "antipatterns": "Subcomponent Level Design Issues",
        "code_issues": "Code Issues",
        "duplicate_loc": "dloc",
        "clones": "Clones",
        "duplicate_components": "Components with duplication",
        "component_level_antipatterns": "Component level issues",
        "method_level_antipatterns": "Subcomponent level issues",
        "average_clone_size": "Avg. Clone Size",
        "occurences": "Blocks",

        "Views": "Views",
        "bookmarks": "Bookmarks",
        "Account": "Account",
        "selectLanguage": "Language",
        "ratingRange": "Rating Range",
        "perspective": "Perspective",

        "totalLoc": "Total LOC",
        "label_executableLoc": "Exec. LOC",
        "title_executableLoc": "Executable LOC",
        "hotspots": "Hotspots",
        "hotspotsLOC": "Hotspots LOC",
        "antiPatternRating": "Design",
        "metricRating": "Metrics",
        "cloneRating": "Duplication",
        "codeQualityRating": "Code Issues",
        "overallRating": "Overall Rating",
        "complexity": "Complexity",
        "Complexity": "Complexity",
        "codeIssues": "Code issues",
        "healthTrend": "Health Trend",
        "componentsRating": "components with lowest rating",
        "issuesIn": "issues in",
        "issuesInLoc": "issues / 1000 LOC",
        "componentViolation": "components in violation",
        "overallDuplication": "overall duplication",
        "high": "High",
        "medium": "Medium",
        "med": "Medium",
        "low": "Low",
        "unknown": "Uncategorized",
        "uncategorised": "Uncategorised",

        "improvedComponents": "Improved Components",
        "deterioratedComponents": "Deteriorated Components",
        "newComponentsWithIssues": "New Components with Issues",
        "marginalImprovement": "Marginal improvement",
        "decreaseInCodequality": "Decrease in code quality",
        "issues": "Issues",

        "ratings": "ratings",
        "metrics": "metrics",
        "type": "Component status",
        "status": "status",
        "Improved": "Improved Components",
        "New": "New hotspots",
        "Old": "Removed hotspots",
        "component_type": "Component Type",
        "Deteriorated": "Deteriorated Components",
        "category": "Category",
        "C_Directory": 'C_Directory',
        "C_FileModule": 'C_FileModule',
        "C_FunctionComponent": 'C_FunctionComponent',
        "C_Class": 'C_Class',
        "C_Struct": 'C_Struct',
        "C_Interface": 'C_Interface',
        "C_TemplateClass": 'C_TemplateClass',
        "SystemLib": 'SystemLib',
        "C_TemplateParameter": 'C_TemplateParameter',
        "C_FunctionTemplateComponent": 'C_FunctionTemplateComponent',
        "C_Function": 'C_Function',
        "C_Method": 'C_Method',
        "COMPONENTS": 'COMPONENTS',
        "SUBCOMPONENTS": 'SUBCOMPONENTS',
        "SYSTEMCOMPONENTS": 'SYSTEMCOMPONENTS',
        "FILE": 'FILE',
        "FILES": 'FILES',
        "PROJECT": 'PROJECT',
        "PROJECTS": 'PROJECTS',
        "MODULES": 'MODULES',
        "CLASSES": 'CLASSES',
        "FUNCTIONS": 'FUNCTIONS',
        "File": 'File',
        "Project": 'Project',
        "Namespace": 'Namespace',
        "Class": 'Class',
        "Struct": 'Struct',
        "Interface": 'Interface',
        "Method": 'Method',
        "CsharpProperty": 'CsharpProperty',
        "RFC": 'RFC',
        "CBO": 'CBO',
        "LOC": 'LOC',
        "DOIH": 'DOIH',
        "CR": 'CR',
        "NOM": 'NOM',
        "NOS": 'NOS',
        "NOP": 'NOP',
        "LOC_Comments": 'LOC Comments',
        "Maxnesting": 'Maxnesting',
        "NOA": 'NOA',
        "NOPA": 'NOPA',
        "ATFD": 'ATFD',
        "NOAV": 'NOAV',
        "LCOM": 'LCOM',
        "FDP": 'FDP',
        "LAA": 'LAA',
        "NOAM": 'NOAM',
        "DUP_PERCENT": 'DUP_PERCENT',

        "no_of_clones": 'No. of Clones',
        "clone_loc": 'Clone LOC',
        "no_of_blocks": 'No. of Blocks',
        "total_clone_loc": 'Total Clone LOC',
        "duplication_percentage": 'Duplication %',
        "title.no_of_clones": 'No. of Clones',
        "title.clone_loc": 'Clone LOC',
        "title.no_of_blocks": 'No. of Blocks',
        "title.total_clone_loc": 'Total Clone LOC',
        "title.duplication_percentage": 'Duplication Percentage',
        "title.RFC": 'Response For Class',
        "title.CBO": 'Coupling Between Objects',
        "title.LOC": 'Lines Of Code',
        "title.DOIH": 'Depth Of Inheritance Hierarchy',
        "title.CR": 'Comments Ratio',
        "title.NOM": 'Number Of Methods',
        "title.NOS": 'Executable LOC',
        "title.NOP": 'Number Of Parameters',
        "title.LOC_Comments": 'LOC Comments',
        "title.Maxnesting": 'Maxnesting',
        "title.NOA": 'Number Of Arguments',
        "title.NOPA": 'Number of Public Attributes',
        "title.ATFD": 'Access to Foreign Data',
        "title.NOAV": 'Number of Accessed Variables',
        "title.LCOM": 'Lack of Cohesion Of Methods',
        "title.FDP": 'Foreign Data Providers',
        "title.LAA": 'Locality of Attribute Accesses',
        "title.DUP_PERCENT": 'DUP_PERCENT',
        "title.NOAM": 'Number of Accessor Methods',
        "title.NOAA": "Number Of Accessible Attributes",
        "title.NOBC": "Number of Base Calls",
        "title.NOOV": "Number of Overridden",
        "title.complexity": 'Complexity',
        "title.Complexity": 'Complexity',
        "violations": 'Violations',
        "no_violations": 'No violations',
        "title.antiPatternRating": "Design",
        "title.metricRating": "Metrics",
        "title.cloneRating": "Duplication",
        "title.codeQualityRating": "Code Issues",
        "title.overallRating": "Overall Rating",
        "ProjectList.activity": "Activity",
        "ProjectList.name": "Name",
        "ProjectList.rating": "Rating",
        "ProjectList.language": "Language",
        "ProjectList.size": "Size",
        "ProjectList.tags": "TAGS",
        "ProjectList.automotive": "Automotive",
        "ProjectList.germany": "Germany",
        "ProjectList.india": "India",
        "ProjectList.subsystems": "Repositories",
        "ProjectList.timestamp": "Date",
        "project_list": "Projects",
        "subsystem_list": "Repositories",
        "lastAnalised": "Last Analysed",
        "duplication_loc": "Duplication LOC",
        "blocks": "Blocks",
        "files": "Files",
        "current_queue": "Current Queue",
        "recent_analysis": "Recent Scan",
        "remove_from_queue": "Remove From Queue",
        "notifications": "Notifications",
        "thresholds": "Thresholds",
        "appearance": "Appearance",
        "language_and_time_zone": "Language & Time Zone",
        "by_activity": "By Activity",
        "by_time": "By Time",
        "by_project": "By Project",
        "project": "Projects",
        "module": "Module",
        "elapsed_time": "Elapsed Time",
        "request_time": "Request Time",
        "queue_position": "Queue Position",
        "in_progress": "In Progress",
        "scheduled": "Scheduled",
        "successfull": "Successfull",
        "failed": "Failed",
        "language_detected": "Language Detected",
        "loc_parsed": "LOC Parsed",
        "components_parsed": "Components Parsed",
        "duplicate_loc_parsed": "Duplicate LOC Parsed",
        "comment_loc_parsed": "Comment LOC Parsed",
        "hotspot_detected": "Hotspot Detected",
        "analysis_log": "SCAN LOG",
        "terminate_analysis": "TERMINATE ANALYSIS",
        "theme": "Theme",
        "show_wraping_popups": "Show Wraping Popups",
        "contextual_help": "Contextual Help",
        "high_contrast": "High Contrast",
        "time_zone": "Time Zone",
        "english": "English",

        "notification_type": "Notification Type",
        "enable_notification_panel": "Enable Notification Panel",
        "enable_email_notifications": "Enable Email Notifications",
        "notify_me_on": "Notify Me On",
        "new_secure_code_availability": "New Secure Code Availability",
        "new_scheduled_analysis": "New Scheduled Scan",
        "major_rating_changes": "Major Rating Changes",
        "new_hotspots": "New Hotspots",
        "removal_of_hotspots": "Removal Of Hotspots",
        "git_sync": "Git Sync",
        "summary": "Summary",
        "subsystems": "Repositories",
        "analysis_history": "Scan History",
        "settings": "Settings",
        "upload_source": "Upload Source",
        "analysis_preferences": "Scan Preferences",
        "import_subsystem": "Import Repository",
        "subsystem_to_import": "Repository to import",
        "select_zip_file": "Select Zip File",
        "upload": "Upload",

        "user_details": "User Details",
        "project_level_roles": "Project Level Roles",
        "first_name": "First Name",
        "last_name": "Last Name",
        "job_title": "Job Title",
        "role": "Role",
        "email": "Email",
        "phone": "Phone",
        "user_name": "Username",
        "project_path": "Project Path",
        "url": "URL",
        "password": "Password",
        "token": "OAuth Token",
        "image": "Image",
        "source_code": "Source Code",
        "Github": "GitHub",
        "complex_method_list": "Test Hungry Methods",
        "current_password": "Current password",
        "old_password": "Old password",
        "reset_password": "Reset password",
        "new_password": "New password",
        "confirm_new_password": "Confirm new password",
        "company_details": "Company details",
        "primary_user": "Primary User",
        "primary_user_details": "Primary User Details",
        "company_name": "Company name",
        "company_address": "Company address",
        "company_website": "Company website",
        "admin": "Admin",
        "confirm_password": "Confirm Password",
        "project_name": "Project Name",
        "project_details": "PROJECTS",
        "project_description": "Project Description",
        "tags_category": "TAGS CATEGORY",
        "tags": "Tags",
        "select_category": "Select Category",
        "new_tag": "New Tag",
        "new_tag_category": "New Tag Category",
        "mandatory_field": "Mandatory Field",
        "add": "ADD",

        "java": "Java",
        "c": "C",
        "cpp": "C++",
        "c_sharp": "C#",
        "c#": "C#",
        "web": "JS",
        "php": "PHP",
        "c/cpp": "C/C++",
        "python": "Python",
        "javascript": "JavaScript",
        "typescript": "TypeScript",
        "go": "Go",
        "objective_c": "ObjC",
        "scala": "Scala",
        "rust": "Rust",
        "kotlin": "Kotlin",
        "solidity": "Solidity",
        "sql": "SQL",

        "info": "Info",
        "success": "Success",
        "warning": "Warning",
        "error": "Error",
        "manager": "Manager",
        "managers": "Managers",
        "analyser": "Analyser",
        "explorer": "Explorer",
        "new_user": "New User",
        "new_vaccount": "New Version Control Account",
        "edit_vaccount": "Edit Version Control Account",
        "new_subsystem": "New Repository",
        "edit_subsystem": "Edit Repository",
        "new_project": "New Project",
        "edit_project": "Edit Project",
        "save": "Save",
        "version_control": "Version Control",
        "subsystem_name": "Repository Name",
        "version_control_account": "Version Control Account",
        "repositories": "Repositories",
        "branches": "Branch",
        "git_branch": "Branch",
        "language": "Language",
        "jira": "Jira",
        "jira_tasks": "JIRA Tasks",
        "criticality_details": "Criticality",
        "status_details": "STATUS",
        "type_details": "TYPE",
        "criticality": "Criticality",
        "criticality_task": "Criticality",
        "priority": "PRIORITY",
        "asigner": "ASSIGNER",
        "asignee": "ASSIGNEE",
        "blocker": "Blocker",
        "critical": "Critical",
        "major": "Major",
        "minor": "Minor",
        "create_task": "CREATE TASK",
        "cancel": "CANCEL",
        "description": "Description",
        "platform": "Platform",
        "description_suggestions": "DESCRIPTION SUGGESTIONS",
        "account_name": "Account Name",
        "repository_type": "Repository Type",
        "priority_jira": "Priority",
        "jira_issue_title": "Task Title",

        "tasks": "Tasks",
        "bug": "Bug",
        "improvement": "Improvement",
        "feature": "Feature",
        "task": "Task",
        "refactoring": "Refactoring",
        "unassigned": "Unassigned",

        "open": "Open",
        "ready_to_test": "Ready to Test",
        "closed": "Closed",
        "reopened": "Reopened",

        "assignee": "Assignee",
        "type_1": "Type",
        "issue_title": "Task Title",
        "new_task": "New Task",
        "edit_task": "Edit Task",
        "linked_issue": "Linked Issue",
        "linked_node": "Linked Node",
        "linked_project": "Linked Project",
        "linked_subsystem": "Linked Repository",
        "linked_projects": "Linked Projects",
        "due_date": "Due Date",
        "sync_with": "SYNC WITH",

        "task_type": "TASK TYPE",
        "status_options": "STATUS",
        "task_status": "Task Status",

        "select_task_status": "Select Task Status",
        "title": "Title",
        "date": "Date",

        "issue_type_details": "ISSUE TYPES",
        "design_issues": "Design Issues",
        "code_issue": "Code Issue",

        "kpis": "KPIs",
        "add_rule": "Add Rule",
        "add_to_kpi": "Add to KPI",
        "add_kpi": "Add KPI",
        "rules": "Rules",
        "new_kpi": "New KPI",
        "edit_kpi": "Edit KPI",
        "kpi_name": "KPI Name",
        "kpi_description": "KPI Description",
        "key_performance_indicators": "Key Performance Indicators",
        "tool": "tool",
        "tool_name": "tool",

        "teams": "Teams",
        "new_team": "New Team",
        "edit_team": "Edit Team",
        "team_name": "Team Name",
        "team_description": "Team Description",
        "team_list": "Teams",

        "kpi_dashboard": "KPI Dashboard",
        "rendering": "Rendering",
        "texturing": "Texturing",
        "lighting": "Lighting",

        "issue_list": "Issue List",
        "task_list": "Task List",
        "team_details": "Team Details",
        "team_members": "Team Members",
        "hotspot_ratio_in_modules": "Hotspot ratio in modules",

        "ProjectView.tiles": "Tiles",
        "ProjectView.list": "List",
        "coverage_distribution": "Coverage Distribution",
        "coverage": "Covered LOC",
        "no_coverage": "Non covered LOC",
        "coverage_component_list": "Coverage by Components",
        "unit_tests": "Unit Tests",
        "overallrating": "Overall Rating",
        "linecoverage": "Line Coverage",
        "branchcoverage": "Branch Coverage",
        "title.overallrating": "Overall Rating",
        "title.linecoverage": "Line Coverage",
        "title.branchcoverage": "Branch Coverage",

        "analysis_config": "Scan Configuration",
        "username": "Username",
        "host": "Host",
        "host_url": "Host URL",
        "project_key": "Project Key",
        "includes": "Additional Includes Directories",
        "excludes": "Excludes",
        "parser_options": "Parser Options",

        "run": "Run",
        "ignored": "Ignored",
        "repository_overview": "Repository Overview",
        "jira_project": "Jira Project",
        "jira_repo": "Repository",
        "jira_assignee": "Jira Assignee",
        "task_description": "Task Description",
        "repository": "Repository",
        "repository_dashboard": "Repository Dashboard",
        "profile_name": "Quality Gate Profile Name",

        "project_id": "Project/tracker Id",
        "teamforge_issue_title": "Title",
        "teamForge_project": "Project",
        "criticality_vs_module": "Criticality vs Modules",
        "modules_vs_criticality": "Modules vs Criticality",
        "modules_vs_issue": "Modules vs Issue types",
        "issue_vs_modules": "Issue type vs Modules"
    }
};

module.exports.translation = language_data;
module.exports.language = lang_id;
