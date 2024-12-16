"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4656],{31458:function(e,n,r){r.d(n,{d:function(){return u},z:function(){return d}});var t=r(36164),i=r(3546),s=r(74047),o=r(14375),a=r(1544);let u=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,n)=>{let{className:r,variant:i,size:o,asChild:d=!1,...l}=e,c=d?s.g7:"button";return(0,t.jsx)(c,{className:(0,a.cn)(u({variant:i,size:o,className:r})),ref:n,...l})});d.displayName="Button"},80605:function(e,n,r){r.d(n,{UA:function(){return f},Uw:function(){return l},c7:function(){return d},jJ:function(){return c},vN:function(){return a},xG:function(){return u}});var t=r(40055),i=r(43240);let s=(0,i.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n"),o=()=>{let[{data:e}]=(0,t.aM)({query:s});return null==e?void 0:e.serverInfo},a=()=>{let[{fetching:e}]=(0,t.aM)({query:s});return e},u=()=>{var e;return null===(e=o())||void 0===e?void 0:e.isChatEnabled},d=()=>{var e;return null===(e=o())||void 0===e?void 0:e.isAdminInitialized},l=()=>{var e;return null===(e=o())||void 0===e?void 0:e.isEmailConfigured},c=()=>{var e;return null===(e=o())||void 0===e?void 0:e.allowSelfSignup},f=()=>{var e;return null===(e=o())||void 0===e?void 0:e.isDemoMode}},91302:function(e,n,r){r.d(n,{Dp:function(){return p},Ho:function(){return y},QJ:function(){return k},av:function(){return P},kP:function(){return S},zq:function(){return $}});var t,i,s=r(36164),o=r(3546),a=r(11978),u=r(24426),d=r.n(u),l=r(43240),c=r(80605),f=r(11634),v=r(66794);function g(e,n){var r,t;let s=function(e,n){switch(n.type){case i.SignIn:case i.Refresh:return{status:"authenticated",data:n.data};case i.SignOut:return{status:"unauthenticated",data:void 0}}}(0,n);return e.status==s.status&&(r=e.data,t=s.data,(null==r?void 0:r.accessToken)===(null==t?void 0:t.accessToken)&&(null==r?void 0:r.refreshToken)===(null==t?void 0:t.refreshToken))?e:s}(t=i||(i={}))[t.SignIn=0]="SignIn",t[t.SignOut=1]="SignOut",t[t.Refresh=2]="Refresh";let h=o.createContext({}),p=(0,l.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),m=(0,l.BX)("\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n"),y=e=>{let{children:n}=e,[r,t]=o.useState(!1),[a]=d()(v.nd,void 0),[u,l]=o.useReducer(g,{status:"loading",data:void 0});o.useEffect(()=>{(null==a?void 0:a.accessToken)&&(null==a?void 0:a.refreshToken)?l({type:i.SignIn,data:a}):l({type:i.SignOut}),t(!0)},[]),o.useEffect(()=>{!r||((null==a?void 0:a.accessToken)&&(null==a?void 0:a.refreshToken)?l({type:i.Refresh,data:a}):(null==a?void 0:a.accessToken)||(null==a?void 0:a.refreshToken)||l({type:i.SignOut}))},[a]);let c=o.useMemo(()=>{var e;return(null==u?void 0:u.status)=="authenticated"?{data:{accessToken:u.data.accessToken},status:u.status}:{status:null!==(e=null==u?void 0:u.status)&&void 0!==e?e:"loading",data:null}},[u]);return(0,s.jsx)(h.Provider,{value:{authState:u,dispatch:l,session:c},children:n})};class b extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function I(){let e=o.useContext(h);if(!e)throw new b;return e}function $(){let{dispatch:e}=I(),[n,r]=d()(v.nd,void 0);return async n=>(r({accessToken:n.accessToken,refreshToken:n.refreshToken}),e({type:i.SignIn,data:n}),!0)}function k(){let e=(0,f.Db)(m),{dispatch:n}=I(),[r,t]=d()(v.nd,void 0);return async()=>{await e(),t(void 0),n({type:i.SignOut})}}function S(){let{session:e}=I();return e}let A=["/auth/signin","/auth/signup","/auth/reset-password"];function P(){let e=(0,c.c7)(),n=(0,a.useRouter)(),r=(0,a.usePathname)(),t=(0,a.useSearchParams)(),{data:i,status:s}=S();return o.useEffect(()=>{if("loading"===s||"authenticated"===s||void 0===e)return;let i="/auth/signup"===r&&"true"===t.get("isAdmin");if(!i&&!e)return n.replace("/auth/signup?isAdmin=true");A.includes(r)||n.replace("/auth/signin")},[e,s]),i}},11634:function(e,n,r){r.d(n,{Db:function(){return g},Lp:function(){return p},zG:function(){return h}});var t=r(22365),i=r(28552),s=r(81013),o=r(17522),a=r(79716),u=r(74630),d=r(40055),l=r(44745),c=r(91302),f=r(70410),v=r(66794);function g(e,n){let[r,t]=(0,d.Db)(e),i=(null==n?void 0:n.form)?h(n.form):void 0,s=async(e,r)=>{let s;try{if(null==(s=await t(e,r))?void 0:s.error)i&&i(s.error),(null==n?void 0:n.onError)&&n.onError(s.error);else if(!(0,u.Z)(null==s?void 0:s.data)){var o;null==n||null===(o=n.onCompleted)||void 0===o||o.call(n,s.data)}}catch(e){(null==n?void 0:n.onError)&&n.onError(e);return}return s};return s}function h(e){return n=>{let{graphQLErrors:r=[]}=n;for(let n of r)if(n.extensions&&n.extensions["validation-errors"]){let r=n.extensions["validation-errors"];for(let n of r.errors)e.setError(n.path,n)}else(null==n?void 0:n.originalError)?e.setError("root",n.originalError):(null==n?void 0:n.message)&&e.setError("root",{message:n.message})}}let p=new l.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,i.HG)({keys:{CompletionStats:()=>null,ServerInfo:()=>null,RepositorySearch:()=>null,RepositoryList:()=>null,RepositoryGrep:()=>null,GrepLine:()=>null,GrepFile:()=>null,GrepTextOrBase64:()=>null,GrepSubMatch:()=>null,GitReference:()=>null,MessageAttachment:()=>null,MessageAttachmentCode:()=>null,MessageAttachmentDoc:()=>null,NetworkSetting:()=>null,ContextInfo:()=>null},resolvers:{Query:{invitations:(0,s.N)(),gitRepositories:(0,s.N)(),webCrawlerUrls:(0,s.N)(),integrations:(0,s.N)(),threads:(0,s.N)()}},updates:{Mutation:{deleteInvitation(e,n,r,t){e.deleteInvitation&&r.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{r.updateQuery({query:f.lE,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.invitations)||void 0===r?void 0:r.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==n.id)),e})})},deleteGitRepository(e,n,r,t){e.deleteGitRepository&&r.inspectFields("Query").filter(e=>"gitRepositories"===e.fieldName).forEach(e=>{r.updateQuery({query:f.S1,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.gitRepositories)||void 0===r?void 0:r.edges)&&(e.gitRepositories.edges=e.gitRepositories.edges.filter(e=>e.node.id!==n.id)),e})})},deleteIntegration(e,n,r,t){e.deleteIntegration&&r.inspectFields("Query").filter(e=>"integrations"===e.fieldName).forEach(e=>{r.updateQuery({query:f.kb,variables:e.arguments},e=>((null==e?void 0:e.integrations)&&(e.integrations.edges=e.integrations.edges.filter(e=>e.node.id!==n.id)),e))})},createIntegration(e,n,r){let t="Query";r.inspectFields(t).filter(e=>{var r,t,i;return"integrations"===e.fieldName&&!!(null===(r=e.arguments)||void 0===r?void 0:r.kind)&&(null===(t=e.arguments)||void 0===t?void 0:t.kind)===(null==n?void 0:null===(i=n.input)||void 0===i?void 0:i.kind)}).forEach(e=>{r.invalidate(t,e.fieldName,e.arguments)})},upsertUserGroupMembership(e,n,r,t){let{userGroupId:i,userId:s,isGroupAdmin:o}=n.input,{user:a,isInsert:u}=t.variables.extraParams||{};e.upsertUserGroupMembership&&r.updateQuery({query:f.gI},e=>((null==e?void 0:e.userGroups)&&(e.userGroups=e.userGroups.map(e=>{if(e.id!==i)return e;let n=[...e.members];if(u){let e=new Date().toISOString();n.push({user:{...a,__typename:"UserSecured"},isGroupAdmin:o,createdAt:e,updatedAt:e,__typename:"UserGroupMembership"})}else n=n.map(e=>e.user.id!==s?e:{...e,isGroupAdmin:o});return{...e,members:n}})),e))},deleteUserGroupMembership(e,n,r,t){let{userGroupId:i,userId:s}=n;e.deleteUserGroupMembership&&r.updateQuery({query:f.gI},e=>((null==e?void 0:e.userGroups)&&(e.userGroups=e.userGroups.map(e=>{if(e.id!==i)return e;let n=[...e.members].filter(e=>e.user.id!==s);return{...e,members:n}})),e))},grantSourceIdReadAccess(e,n,r,t){if(e.grantSourceIdReadAccess){let{sourceId:e}=n;r.inspectFields("Query").filter(n=>{var r;return"sourceIdAccessPolicies"===n.fieldName&&(null===(r=n.arguments)||void 0===r?void 0:r.sourceId)===e}).forEach(e=>{r.updateQuery({query:f.hA,variables:e.arguments},e=>{var r;if(null==e?void 0:null===(r=e.sourceIdAccessPolicies)||void 0===r?void 0:r.read){let{userGroupName:r}=t.variables.extraParams||{};e.sourceIdAccessPolicies.read=[...e.sourceIdAccessPolicies.read,{__typename:"UserGroup",id:n.userGroupId,name:r}]}return e})})}},revokeSourceIdReadAccess(e,n,r,t){if(e.revokeSourceIdReadAccess){let{userGroupId:e,sourceId:t}=n;r.inspectFields("Query").filter(e=>{var n;return"sourceIdAccessPolicies"===e.fieldName&&(null===(n=e.arguments)||void 0===n?void 0:n.sourceId)===t}).forEach(n=>{r.updateQuery({query:f.hA,variables:n.arguments},n=>{var r,i;return(null==n?void 0:null===(r=n.sourceIdAccessPolicies)||void 0===r?void 0:r.sourceId)===t&&(null==n?void 0:null===(i=n.sourceIdAccessPolicies)||void 0===i?void 0:i.read)&&(n.sourceIdAccessPolicies.read=n.sourceIdAccessPolicies.read.filter(n=>n.id!==e)),n})})}},deleteThread(e,n,r,t){e.deleteThread&&r.inspectFields("Query").filter(e=>{var n;return"threads"===e.fieldName&&!(null===(n=e.arguments)||void 0===n?void 0:n.ids)}).forEach(e=>{r.updateQuery({query:f.XL,variables:e.arguments},e=>((null==e?void 0:e.threads)&&(e.threads.edges=e.threads.edges.filter(e=>e.node.id!==n.id)),e))})},setThreadPersisted(e,n,r,t){if(e.setThreadPersisted){let e="Query";r.inspectFields(e).filter(e=>{var n,r;return"threads"===e.fieldName&&!(null===(n=e.arguments)||void 0===n?void 0:n.ids)&&!!(null===(r=e.arguments)||void 0===r?void 0:r.before)}).forEach(n=>{r.invalidate(e,n.fieldName,n.arguments)})}},markNotificationsRead(e,n,r){e.markNotificationsRead&&r.inspectFields("Query").filter(e=>"notifications"===e.fieldName).forEach(e=>{r.updateQuery({query:f.g0,variables:e.arguments},e=>{if(null==e?void 0:e.notifications){let r=!n.notificationId;e.notifications=e.notifications.map(e=>r?{...e,read:!0}:e.id===n.notificationId?{...e,read:!0}:e)}return e})})}}},optimistic:{upsertUserGroupMembership:()=>!0,deleteUserGroupMembership:()=>!0,grantSourceIdReadAccess:()=>!0,revokeSourceIdReadAccess:()=>!0}}),(0,t.M)(async e=>{let n=(0,v.bW)(),r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken;return{addAuthToOperation(n){let i=(0,v.bW)(),s=(0,v.jW)();if(r=null==i?void 0:i.accessToken,t=null==i?void 0:i.refreshToken,r)return e.appendHeaders(n,{Authorization:"Bearer ".concat(r)});if(s){let r={Authorization:"Bearer ".concat(s.authorization),...s.headers};return e.appendHeaders(n,r)}return n},didAuthError(e,n){let r=e.graphQLErrors.some(e=>{var n;return(null==e?void 0:null===(n=e.extensions)||void 0===n?void 0:n.code)==="UNAUTHORIZED"});return r&&v.gN.clearAccessToken(),r},willAuthError(e){let n=(0,v.bW)(),i=(0,v.jW)();if(r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken,"query"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["GetServerInfo"].includes(e.name.value)})||"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["tokenAuth","register"].includes(e.name.value)})||t&&"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.value)==="refreshToken"}))return!1;if(r)try{let{exp:e}=(0,a.o)(r);return(0,v.pw)(e)}catch(e){return!0}else if(i)return!(null==i?void 0:i.authorization);else return v.gN.clearAccessToken(),!0},refreshAuth:async()=>v.gN.refreshToken(async()=>{var n;let r=null===(n=(0,v.bW)())||void 0===n?void 0:n.refreshToken;if(r)return e.mutate(c.Dp,{refreshToken:r}).then(e=>{var n;return null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.refreshToken})})}}),(0,l.Dk)({onError(e){e.message.startsWith("[GraphQL]")&&(e.message=e.message.replace("[GraphQL]","").trim())}}),l.Ek,(0,l.pV)({forwardSubscription(e,n){var r,t,i;let s=null!==(i=null===(t=n.context.fetchOptions)||void 0===t?void 0:null===(r=t.headers)||void 0===r?void 0:r.Authorization)&&void 0!==i?i:"",a=window.location.protocol,u=window.location.host,d=(0,o.eI)({url:"".concat("https:"===a?"wss:":"ws:","//").concat(u,"/subscriptions"),connectionParams:{authorization:s}}),l={...e,query:e.query||""};return{subscribe(e){let n=d.subscribe(l,e);return{unsubscribe:n}}}}})]})},70410:function(e,n,r){r.d(n,{Cl:function(){return c},D7:function(){return h},DQ:function(){return u},GG:function(){return o},Gx:function(){return p},S1:function(){return s},TH:function(){return d},XL:function(){return b},Y6:function(){return l},g0:function(){return k},gI:function(){return m},hA:function(){return y},kb:function(){return f},lE:function(){return i},md:function(){return $},r4:function(){return I},ts:function(){return v},yB:function(){return a},zz:function(){return g}});var t=r(43240);let i=(0,t.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),s=(0,t.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,t.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,t.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),u=(0,t.BX)("\n  query ListJobs {\n    jobs\n  }\n"),d=(0,t.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),l=(0,t.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),c=(0,t.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),f=(0,t.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),v=(0,t.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),g=(0,t.BX)("\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n"),h=(0,t.BX)("\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n"),p=(0,t.BX)("\n  query ContextInfo {\n    contextInfo {\n      sources {\n        id\n        sourceKind\n        sourceId\n        sourceName\n      }\n    }\n  }\n"),m=(0,t.BX)("\n  query UserGroups {\n    userGroups {\n      id\n      name\n      createdAt\n      updatedAt\n      members {\n        user {\n          id\n          email\n          name\n          createdAt\n        }\n        isGroupAdmin\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"),y=(0,t.BX)("\n  query sourceIdAccessPolicies($sourceId: String!) {\n    sourceIdAccessPolicies(sourceId: $sourceId) {\n      sourceId\n      read {\n        id\n        name\n      }\n    }\n  }\n"),b=(0,t.BX)("\n  query ListThreads(\n    $ids: [ID!]\n    $isEphemeral: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threads(\n      ids: $ids\n      isEphemeral: $isEphemeral\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),I=(0,t.BX)("\n  query ListThreadMessages(\n    $threadId: ID!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threadMessages(\n      threadId: $threadId\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          threadId\n          role\n          content\n          attachment {\n            code {\n              gitUrl\n              filepath\n              language\n              content\n              startLine\n            }\n            clientCode {\n              filepath\n              content\n              startLine\n            }\n            doc {\n              __typename\n              ... on MessageAttachmentWebDoc {\n                title\n                link\n                content\n              }\n              ... on MessageAttachmentIssueDoc {\n                title\n                link\n                author {\n                  id\n                  email\n                  name\n                }\n                body\n                closed\n              }\n              ... on MessageAttachmentPullDoc {\n                title\n                link\n                author {\n                  id\n                  email\n                  name\n                }\n                body\n                merged\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),$=(0,t.BX)("\n  mutation SetThreadPersisted($threadId: ID!) {\n    setThreadPersisted(threadId: $threadId)\n  }\n"),k=(0,t.BX)("\n  query Notifications {\n    notifications {\n      id\n      content\n      read\n      createdAt\n    }\n  }\n")},66794:function(e,n,r){r.d(n,{bW:function(){return u},gN:function(){return h},jW:function(){return v},nd:function(){return o},pw:function(){return c},zr:function(){return g}});var t=r(79716),i=r(74630),s=r(1544);let o="_tabby_auth",a="_tabby_chat_sdk_fetcher_options",u=()=>{if((0,s.S_)()){let e=localStorage.getItem(o);if(e)try{return JSON.parse(e)}catch(e){}}},d=e=>{localStorage.setItem(o,JSON.stringify(e))},l=()=>{localStorage.removeItem(o),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:o}))},c=e=>!!(0,i.Z)(e)||Date.now()>1e3*e,f=e=>!(0,i.Z)(e)&&Date.now()-1e3*e<6e4,v=()=>{try{let e=sessionStorage.getItem(a);if(!e)return;return JSON.parse(e)}catch(e){return}},g=e=>{if(e)try{sessionStorage.setItem(a,JSON.stringify(e))}catch(e){sessionStorage.removeItem(a)}},h=new class{clearAccessToken(){let e=u();e&&d({...e,accessToken:""})}async refreshToken(e){try{var n;if(void 0===(null===(n=navigator)||void 0===n?void 0:n.locks))throw console.error("The Web Locks API is not supported in your browser. Please upgrade to a newer browser version."),Error();await navigator.locks.request("_tabby_auth_lock",async()=>{let n;let r=u(),i=null==r?void 0:r.accessToken,s=null==r?void 0:r.refreshToken;if(i){let{iat:s}=(0,t.o)(i);n=f(s)?r:await e()}else s&&(n=await e());n?d(n):l()})}catch(e){l()}}}}}]);