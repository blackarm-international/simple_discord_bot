echo
#
echo "eslint index.ts"
if npx eslint index.ts
then
  echo "done"
else
  exit
fi
echo
#
echo "transpiling index.ts"
if npx tsc
then
  echo "done"
else
  exit
fi
echo