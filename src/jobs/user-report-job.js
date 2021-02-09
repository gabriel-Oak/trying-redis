const UserReportJob = {
  key: 'UserReport',
  handler: async ({ data }) => {
    const { user } = data;

    console.log('Waiting a very long time to report user. 10000ms');
    await new Promise((r) => setTimeout(() => {
      r();
    }, 10000));
    
    console.log(`Reporting user: ${user.name}`);
  },
}

export default UserReportJob;