[ ] Fix can't login error

Development branch explanation:

main - This is for update the backbone of the application, in addition, should update blog here

feature/... - This is for developing the main feature of the application

bugfix/... - This is for fixing the main bug of the application

CN-pro - This is for Chinese version production

-- When ready for production, should merge 'feature/...' and 'bugfix/...' into CN-pro, should merge main into CN-pro

-- After finish developing on 'feature/...' and 'bugfix/...' should merge them into main

-- Everytime create a new branch 'feature/...' and 'bugfix/...' should create them from main, so keep in mind that main should be updated before create a new branch from it

Prisma explanation:

For development, we should track migration folder and file in git too

In my Mac computer, we get the migration record for production database [Supabase: my-site]

[] remember to deal with that migration record

In my windows pc, we need to track migration record in git, and they are using the development database [Supabase: my-blog-test]
