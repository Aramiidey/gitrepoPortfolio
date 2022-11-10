import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
  userAgent: "skylight v1",
});
 

export const getAllRepos = async () => {
       try {
        const response = await fetch(`https://api.github.com/users/Aramiidey/repos`)
        if(!response.ok){
            return ({error:"Something went wrong"})
        }
        const data = response.json()
        return data
       }catch(error){
        return ({error:"Something went wrong"})
       }

}

export const getSingleRepo = async (repoName) => {
  try {
    const response = await octokit.request(`GET /repos/Aramiidey/${repoName}`, {
      owner: "Aramiidey",
      repo: `${repoName}`,
    });
    if(response.status !== 200){
        return({error:"something went wrong"})
    }
    return response
  } catch (error) {
    return({error:"something went wrong"})
  }
};
